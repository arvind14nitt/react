import './ExpenseItem.css';
function ExpenseItem()
{
     return (
	<div className="expense-item">
	<div className="expense-item__date"> Date     </div>
	<div className="expense-item__description"><h2> Description</h2>     </div>
	<div className="expense-item__price"> Price     </div>
	</div>
	);
}

export default ExpenseItem;
