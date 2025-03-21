async function checkIfBlocked() {
    // Get the user's IP address
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const userIP = ipData.ip;
    
    // Fetch the blocked IP list from GitHub
    const blockedIPsResponse = await fetch('https://raw.githubusercontent.com/fooaloo/blocked/main/blocked_ips.json');
    const blockedIPsData = await blockedIPsResponse.json();
    const blockedIPs = blockedIPsData.blocked;
    
    // Check if the user's IP is in the blocked list
    if (blockedIPs.includes(userIP)) {
      alert("You are blocked from accessing this site.");
      // Redirect or block the user
      window.location.href = 'https://example.com/blocked'; // You can redirect to a blocked page
    } else {
      console.log('Welcome, your IP is not blocked.');
    }
  }

  // Run the function when the page loads
  window.onload = checkIfBlocked;