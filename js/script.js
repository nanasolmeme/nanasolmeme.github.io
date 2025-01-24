document.addEventListener('DOMContentLoaded', () => {
    // Function to update chart links dynamically
    function updateChartLinks() {
      const chartLink1 = document.getElementById('chart-link-1');
      const chartLink2 = document.getElementById('chart-link-2');
      
      // Replace these with your actual launch links
      chartLink1.href = 'https://pump.fun/your-token-address';
      chartLink2.href = 'https://dexscreener.com/solana/your-token-address';
    }
  
    // Call the function to set initial links
    updateChartLinks();
  });