import './ExpenseItem.css';
function ExpenseItem()
{
     return (
	<div className="expense-item">
	<div className="expense-item__date"> 22-May-2022     </div>
	<div className="expense-item__description"><h2> Purchase a watch</h2>     </div>
	<div className="expense-item__price"> $20     </div>
	</div>
	);
}

export default ExpenseItem;
