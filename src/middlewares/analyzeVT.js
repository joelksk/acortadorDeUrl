import axios from 'axios'

const VIRUSTOTAL_API_KEY = process.env.API_KEY_VIRUS_TOTAL;

export const analyzeUrl = async (url) => {
    try {
      const response = await axios.post(
        "https://www.virustotal.com/api/v3/urls",
        new URLSearchParams({ url }),
        {
          headers: { "x-apikey": VIRUSTOTAL_API_KEY },
        }
      );
      return response.data.data.id; // ID de análisis
    } catch (error) {
      console.error(`❌ Error analizando ${url}:`, error.response?.data);
      return null;
    }
  }
  
  // Obtener el resultado del análisis
  export const getAnalysisResult = async (analysisId) => {
    try {
      const response = await axios.get(
        `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
        {
          headers: { "x-apikey": VIRUSTOTAL_API_KEY },
        }
      );
  
      const stats = response.data.data.attributes.stats;
      return {
        status: stats.malicious > 0 ? "maliciosa" : "segura",
        report: stats, // Guardamos detalles del análisis
      };
    } catch (error) {
      console.error("❌ Error al obtener resultado:", error.response?.data);
      return { status: "desconocida", report: null };
    }
  }

  