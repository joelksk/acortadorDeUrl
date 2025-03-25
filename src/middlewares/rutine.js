import cron from 'node-cron'
import  {ShorturlsServices}  from '../services/urlServices.js'
import {MaliciousListServices} from '../services/maliciousListServices.js'
import { analyzeUrl, getAnalysisResult } from './analyzeVT.js';

const QUOTE_PER_DAY = 500
const TIME=15000
const ONE_DAY = 24 * 60 * 60 * 1000;
const DAY_OF_ANALIZE="25 01 * * 2" // TODOS LOS MARTES A LAS 00 HS

// Revisar todas las URLs cada domingo a las 3 AM
cron.schedule(DAY_OF_ANALIZE, async () => {
    let malwareFound=0;
    console.log("⏳ Iniciando verificación semanal de URLs...");
  
    const urls = await ShorturlsServices.getAll();
    //Dividimos el lote en partes de 500 urls
    const lotesUrl = chunckArray(urls, QUOTE_PER_DAY)

    for (let i = 0; i < lotesUrl.length; i++) {
        let urlCount = 0;
        let malwarePerLote = 0
        
        for (let j = 0; j < lotesUrl[i].length; j++) {
            const existingMalicious = await MaliciousListServices.checkMaliciousUrl(lotesUrl[i][j].originalUrl);
            urlCount++
                if (existingMalicious) continue; // Si ya es maliciosa, saltarla
            
                console.log(`🔍 Analizando: ${lotesUrl[i][j].originalUrl}`);
                try {
                    const analysisId = await analyzeUrl(lotesUrl[i][j].originalUrl);
                    if (!analysisId) throw new Error("No se obtuvo ID de análisis.");
                } catch (error) {
                    console.error(`❌ Error al analizar ${lotesUrl[i][j].originalUrl}:`, error.message);
                    continue; // Sigue con la siguiente URL
                }
            
                    await delay(TIME)
                    const result = await getAnalysisResult(analysisId);
                    if (result.status === "maliciosa") {
                    await MaliciousListServices.createNewMaliciousUrl(lotesUrl[i][j].originalUrl, lotesUrl[i][j]._id, result.report);
                    //TODO: Eliminar las url maliciosas de la abse de datos real
                    await ShorturlsServices.deleteShortUrl(lotesUrl[i][j]._id)
                    }
                    malwareFound++
                    malwarePerLote++
        }

        
            /*** INFORME POR LOTE */        
            console.log("Resultados: ");
            console.log("Lote N° " + (i + 1) + "/" +  lotesUrl.length);
            console.log("Url analizadas " + urlCount);
            console.log("Url Maliciosas Encontradas " + malwareFound);

        //Si no es el ultimo lote analizado, esperamos un dia para continuar el proceso
        if( i !== lotesUrl.length -1) {
            console.log("🛠🛠 LIMITE DIARIO ALCANZADO... seguiremos con el proceso mañana! ");
            console.log("lote " + lotesUrl.length + ", indice " + i)
            await delay(ONE_DAY)
        }
    }
  
    console.log("✅ Verificación semanal completada.");
    console.log("Se han eliminado un total de " + malwareFound + "urls maliciosas.");
    
  });

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const chunckArray = (array, chunkSize) => {
    const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
    return result;
  }