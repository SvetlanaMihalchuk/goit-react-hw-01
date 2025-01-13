import css from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
  return (
      <div>
          <table>
  <thead className={css.table}>
    <tr className={css.table_header}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={css.tbody}>
                  {items.map(item => (
                      <tr key={item.id}>
                          <td className={css.typeName}>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</td>
                          <td className={css.amount}>{item.amount}</td>
                          <td className={css.currency}>{item.currency}</td>
                      </tr>))}
  </tbody>
</table>
    </div>
  )
}

export default TransactionHistory