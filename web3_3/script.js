
document.getElementById("hablar").addEventListener("click", () => {
    let texto = document.getElementById("texto").value;
    const utterThis = new SpeechSynthesisUtterance(texto);
    const synth = window.speechSynthesis;
    synth.cancel(   );
    synth.speak(utterThis);
});

// JavaScript
document.getElementById("cancelar").addEventListener("click", () => {
    window.speechSynthesis.cancel();
    console.log("Síntesis de voz detenida.");
});



