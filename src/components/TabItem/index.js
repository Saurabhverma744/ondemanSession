import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const updateCards = () => {
    updateTabItem(tabId)
  }

  const onClickStyleChange = () => (isActive ? 'active-tab-btn' : '')

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${onClickStyleChange()}`}
        onClick={updateCards}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
