import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Webpage development</td>
              <td>
                <PriceHighlight variant="income">
                  $ 12.000,00
                </PriceHighlight>
              </td>
              <td>Sale</td>
              <td>04/13/2022</td>
            </tr>
            <tr>
              <td width="50%">Restaurant</td>
              <td>
                <PriceHighlight variant="outcome">
                  - $ 249,00
                </PriceHighlight>
              </td>
              <td>Food</td>
              <td>04/15/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>  
      </TransactionsContainer>
    </div>
  )
}