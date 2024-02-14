import React from 'react'
import 'nes.css/css/nes.min.css';

function Menu(props) {

    const { menu, addItemToOrder } = props;

  return (
    <div className="nes-container with-title" style={styles.container}>
        <p className="title">MENU</p>
        <div style={styles.itemsContainer}>
            {
                menu.map(item => 
                    <div style={{display: 'flex', marginBottom: '2%'}}>
                        <div style={styles.eachItem}>
                            <p style={styles.item}>{item.name}</p>
                            <p style={styles.price}>${item.price}</p>
                        </div>
                        <button style={{
                                fontSize: '10px',
                                marginLeft: '10%',
                                padding: '2%'
                            }} type="button" className="nes-btn" onClick={() => addItemToOrder(item)}>+</button>
                    </div>
                )
            }
        </div>
    </div>
  )
}

const styles = {
    container: {
        width: '35%',
        margin: '2%'
    }, 

    itemsContainer: {
        display: 'flex',
        flexDirection: 'column'
    },

    eachItem: {
        display: 'flex',
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '3%'
    },

    price: {
        textAlign: 'left'
    },


}
export default Menu