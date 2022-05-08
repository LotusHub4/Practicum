

export function EmailFunction(emailItems) {

    return (
        <div className='emailInput'>
            <label> {emailItems.label}</label>

            <div>
                <input type="email" placeholder="example@example.com" required />
            </div>

        </div>
    )
}
