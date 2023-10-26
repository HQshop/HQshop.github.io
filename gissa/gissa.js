const slumptal = Math.floor(Math.random() * 1000000) * 1
let antalgissningar = 0

slump = Math.random()

function gissaTal() {
    console.log(`slump = ${slump}`)
    let textfelt_gissa = document.getElementById("gissa").value
    let gissa_int = Number(textfelt_gissa)
    let vinn = false
    let p_svar = document.getElementById("p_svar")

    if (antalgissningar < 3){

        if (slumptal === gissa_int){
            console.log(`Rätt svar`)
            vinn = true 
            p_svar.innerHTML = "Win Win"
        }
        else{
            console.log(`Big wrong my boy`)

            if (antalgissningar === 2){
                p_svar.innerHTML = "Du suger på att gissa"
            }
            else{
                p_svar.innerHTML = `Wrong my boy $(gissa_int)`
            }

            document.getElementById("gissa").value=""
            document.getElementById("gissa").focus()
        }

        antalgissningar++
    }

    else{

        p_svar.innerHTML=`Big wrong my boy`
    }
}
