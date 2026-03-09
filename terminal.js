const input = document.getElementById("command")
const output = document.getElementById("terminal-output")

function print(text){

const line = document.createElement("div")
line.className = "line"
line.textContent = text

output.appendChild(line)

}

function openLink(url){
window.open(url, "_blank")
}

function runCommand(cmd){

cmd = cmd.trim().toLowerCase()

print("> " + cmd)

switch(cmd){

case "help":

print("")
print("Available commands:")
print("github   - open my github")
print("linkedin - open my linkedin")
print("youtube  - open my youtube")
print("clear    - clear terminal")
print("")

break


case "github":

print("Opening GitHub...")
openLink("https://github.com/Alexandercsen")
break


case "linkedin":

print("Opening LinkedIn...")
openLink("https://www.linkedin.com/in/alexander-coyle-%C5%9Fent%C3%BCrk-018a0b310/")
break


case "youtube":

print("Opening YouTube...")
openLink("www.youtube.com/@BitflipTutor")
break


case "clear":

output.innerHTML=""
break


default:

print("Unknown command. Type 'help'.")

}

}

input.addEventListener("keydown", e => {

if(e.key === "Enter"){

runCommand(input.value)
input.value=""

}

})

print("Welcome to my portfolio terminal.")
print("Type 'help' to see commands.")