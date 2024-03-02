async function fetchSounds() {
    
    const response = await fetch('/assets/globals.json');
    const data = await response.json();
    return data.sounds;
}


document.addEventListener("DOMContentLoaded", () => {
    fetchSounds().then(sounds => {
        const soundboard = document.getElementById("soundboard");
        sounds.forEach(sound => {
            const soundDiv = document.createElement('button');
            soundDiv.classList.add("sound");
            soundDiv.id = sound.display
            soundDiv.innerText = sound.display;
            soundDiv.onclick = function() {
                const audio = new Audio('/assets/audios/' + sound.file + ".mp3"); 
                audio.play().catch(error => console.error("Error playing the sound:", error));
            };
            soundboard.appendChild(soundDiv);
        });
    })
});
