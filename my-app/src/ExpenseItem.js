import './ExpenseItem.css';
function ExpenseItem()
{
    const date = "22-May-2022";
    const description = "Purchase a watch";
    const price = 20;
      return (
	<div className="expense-item">
	<div className="expense-item__date"> {date}    </div>
	<div className="expense-item__description"><h2> {description} </h2>     </div>
	<div className="expense-item__price"> ${price}     </div>
	</div>
	);
}

export default ExpenseItem;
