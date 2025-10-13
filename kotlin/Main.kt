import com.bankingapp.*

fun main() {
    val forex: MoneyChanger = MoneyChanger()
    val controller: Controller = Controller(forex)

    controller.mainMenu()
}