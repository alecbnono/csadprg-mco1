import com.bankingapp.*

/*
********************
Last names: Calibo, Nono, Panlilio, So
Language: Kotlin
Paradigm(s): Object-Oriented Programming
********************
*/

fun main() {
    val forex: MoneyChanger = MoneyChanger()
    val controller: Controller = Controller(forex)

    controller.mainMenu()
}
