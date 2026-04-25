window.onload = function() {
    const github_image = document.getElementById("github");
    const youtube_image = document.getElementById("youtube");
    
    const head_bar = document.getElementById("head_bar");

    const github_image_name = "github_";
    const youtube_image_name = "youtube_";
    
    const images = [github_image, youtube_image];
    const img_names = [github_image_name, youtube_image_name];

    const dark_mode_setter = document.getElementById("dark_mode");

    const dark_e = "dark.png";
    const light_e = "light.png";

    let isDarkMode = true;

    function change_themes() {
        const suffix = isDarkMode ? light_e : dark_e;
        
        if (isDarkMode) {
            head_bar.style.backgroundColor = "darkslategrey";
        } else {
            head_bar.style.backgroundColor = "lightgrey";
        }
        
        for (let i = 0; i < images.length; i++) {
            let img = images[i];
            
            // skip missing elements
            if (!img) continue; 
            
            img.src = "assets/" + img_names[i] + suffix;
        }
    }

    if (dark_mode_setter) {
        dark_mode_setter.onclick = function(event) {
            isDarkMode = !isDarkMode;

            console.log(isDarkMode);

            change_themes();
        }
    }
    change_themes();
}

