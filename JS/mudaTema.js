function mudaTema(dark) {
    if(dark){
        document.documentElement.style.setProperty('--Black', '#FFFFFF');
        document.documentElement.style.setProperty('--BlackFocus', '#797979');
        document.documentElement.style.setProperty('--RealDarkBlue', '#696969');
        document.documentElement.style.setProperty('--AlmostTransparent', '#0000001f');
        document.documentElement.style.setProperty('--BaseColor', '#575757');
        document.documentElement.style.setProperty('--AzulClaroBkg', '#AAAAAA');
        document.documentElement.style.setProperty('--Red', '#888888');
        document.documentElement.style.setProperty('--SecondAccentColor', '#464646');
        document.documentElement.style.setProperty('--AccentColor', '#121212');
        document.documentElement.style.setProperty('--LightGray', '#232323');
        document.documentElement.style.setProperty('--AlmostWhite', '#111111');
        document.documentElement.style.setProperty('--WhiteFocus', '#282828');
        document.documentElement.style.setProperty('--White', '#232323');
        
        var github = document.getElementById('github');
        github.firstElementChild.style.display = 'none';
        github.lastElementChild.style.display = 'initial';

        document.getElementById("moon").style.display = 'initial';
        document.getElementById("sun").style.display = 'none';
        document.getElementById("pTema").innerHTML = 'DARK';

        document.getElementById("ColPck").value = "#FFFFFF";
        $("#ColPck").trigger("change");

    }else{
        document.documentElement.style.setProperty('--Black', '#000000');
        document.documentElement.style.setProperty('--BlackFocus', '#020202');
        document.documentElement.style.setProperty('--RealDarkBlue', '#1f1926');
        document.documentElement.style.setProperty('--AlmostTransparent', '#0000001f');
        document.documentElement.style.setProperty('--BaseColor', '#322c40');
        document.documentElement.style.setProperty('--AzulClaroBkg', '#80b9e0');
        document.documentElement.style.setProperty('--Red', '#cf0000');
        document.documentElement.style.setProperty('--SecondAccentColor', '#605869');
        document.documentElement.style.setProperty('--AccentColor', '#B6B7CF');
        document.documentElement.style.setProperty('--LightGray', '#dddddd');
        document.documentElement.style.setProperty('--AlmostWhite', '#f0f0f0');
        document.documentElement.style.setProperty('--WhiteFocus', '#fdfdfd');
        document.documentElement.style.setProperty('--White', '#ffffff');     

        var github = document.getElementById('github');
        github.firstElementChild.style.display = 'initial';
        github.lastElementChild.style.display = 'none';

        document.getElementById("moon").style.display = 'none';
        document.getElementById("sun").style.display = 'initial';
        document.getElementById("pTema").innerHTML = 'LIGHT';
        
        document.getElementById("ColPck").value = "#000000";
        $("#ColPck").trigger("change");
    }
}
