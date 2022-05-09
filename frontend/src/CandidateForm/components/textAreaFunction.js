import '../form.css'

export function TextAreaFunction(curr) {
    const isRequired = curr.curr.requierd

    return (

        <div className='textAreaClass'>
            <label className='textAreaLabel'> {curr.curr.label}</label>
            {isRequired ?
                <textarea maxLength={500} required />
                :
                <textarea maxLength={500} />
            }
        </div>

    )
}
