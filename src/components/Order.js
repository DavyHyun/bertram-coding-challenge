import React from 'react'

function Order(props) {
    const { order, handleCheckout } = props;

    const subtotal = order.reduce((acc, item) => acc + item.price, 0);
  
    return (
      <div className="nes-container with-title" style={styles.container}>
        <p className="title">Order</p>
        <div style={styles.itemsContainer}>
            {
                    order.map(item => 
                        <div style={{display: 'flex'}}>
                            <div style={styles.eachItem}>
                                <p style={styles.item}>{item.name}</p>
                                <p style={styles.price}>${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                    )
                }
        </div>
        <div style={styles.subtotal}>
            <p style={styles.item}>Subtotal:</p>
            <p style={styles.price}>${subtotal.toFixed(2)}</p>
        </div>
        <button style={{
            marginTop: '5%'
        }}type="button" className="nes-btn is-success" onClick={() => handleCheckout(subtotal)}>Checkout</button>
      </div>
    );
}

export default Order

const styles = {
    container: {
        width: '100%',
        marginTop: '2%',
    }, 

    itemsContainer: {
        display: 'flex',
        flexDirection: 'column'
    },

    eachItem: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    subtotal: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '7%'
    },

    price: {
        textAlign: 'left'
    },

}


