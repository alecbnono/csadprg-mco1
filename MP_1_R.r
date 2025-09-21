# ********************
# Last names: Calibo, Nono, Panlilio, So
# Language: R
# Paradigm(s): Object Oriented
# ********************

users <- c()

printMainMenu <- function() {
    cat("Select Transaction\n")
    cat("[1] Register Account Name\n")
    cat("[2] Deposit Amount\n")
    cat("[3] Withdraw Amount\n")
    cat("[4] Currency Exchange\n")
    cat("[5] Record Exchange Rates\n")
    cat("[6] Show Interest Computation\n")
}

registerAccountName <- function(){
    cat("\nRegister Account Name\n")
    fullName <- readline(prompt = "Enter your full name: ")
    return(fullName)
}


printMainMenu()

letterChoice <-'N'

while (letterChoice == 'N'){
    users <- c(users, registerAccountName())
    letterChoice <- readline(prompt = "Back to the Main Menu (Y/N): ")
}


print(users)