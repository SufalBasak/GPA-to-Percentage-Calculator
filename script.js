function calculateGPA() {
  const sgpa1 = parseFloat(document.getElementById("sgpa1").value);
  const sgpa2 = parseFloat(document.getElementById("sgpa2").value);
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  errorDiv.textContent = "";
  resultDiv.innerHTML = "";

  if (
    isNaN(sgpa1) ||
    isNaN(sgpa2) ||
    sgpa1 < 0 ||
    sgpa1 > 10 ||
    sgpa2 < 0 ||
    sgpa2 > 10
  ) {
    errorDiv.textContent =
      "❌ Please enter valid SGPA values between 0 and 10.";
    return;
  }

  const cgpa = ((sgpa1 + sgpa2) / 2).toFixed(2);
  const sgpa1Perc = (sgpa1 * 9.5).toFixed(2);
  const sgpa2Perc = (sgpa2 * 9.5).toFixed(2);
  const cgpaPerc = (cgpa * 9.5).toFixed(2);

  resultDiv.innerHTML = `
        <strong>Semester 1:</strong><br>
        SGPA: ${sgpa1} | Percentage: ${sgpa1Perc}%<br><br>
        <strong>Semester 2:</strong><br>
        SGPA: ${sgpa2} | Percentage: ${sgpa2Perc}%<br><br>
        <strong>CGPA:</strong> ${cgpa}<br>
        <strong>Overall Percentage:</strong> ${cgpaPerc}%
      `;
}
