import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>

            <form action="#">
                <div>
                    <label >Name</label>
                    <input type="text" required placeholder='abc' />
                </div>
                <div>
                    <label >Email</label>
                    <input type="email" required placeholder='abc@xyz.com' />
                </div>
                <div>
                    <label >Message</label>
                    <input type="text" required placeholder='Tell us about your query...' />
                </div>
                <button type='submit'>Send</button>
            </form>

        </main>
    </div>
  )
}

export default Contact
