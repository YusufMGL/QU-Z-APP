const soruListesi = [

new Soru("1-Hangisi Javascript paket yönetim uygulam",{a:"Node.js",b:"Typescript", c:"nuget",d:"Npm"},"d"),
new Soru("2-Hangisi Javascript paket yönetim uygulama",{a:"Node.js",b:"Typescript", c:"nuget",d:"Npm"},"d"),
new Soru("3-Hangisi Javascript paket yönetim uygulamas",{a:"Node.js",b:"Typescript", c:"nuget",d:"Npm"},"d"),
new Soru("4-Hangisi Javascript paket yönetim uygulamas",{a:"Node.js",b:"Typescript", c:"nuget",d:"Npm"},"d")
];

const quiz = new Quiz(soruListesi);
const ui =new UI();

document.getElementById("btnSoruGetir").addEventListener("click", function () {

    if (quiz.soruIndex < quiz.sorular.length) {
        UI.soruGoster(quiz.soruGetir());
        quiz.soruIndex += 1;
        console.log(quiz);
    } else {
        console.log("Soru bitti");
    }

});
