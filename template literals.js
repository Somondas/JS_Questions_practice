let header = "Template Literals"
let tags = ["laura", "lasan", "infalan"]
let html = `<h1>${header}</h1><ul>`
for(const x of tags){
  html+= `<li>${x}</li>`
}
html+= `</ul>`
