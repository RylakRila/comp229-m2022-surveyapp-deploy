const StatementInput = (props)=>{

    return(
        <div >
            <p >
                What is your question?
            </p>
            <input type="text" 
                    name="question-input"
                    placeholder="Your question"
                    value={props.Statement}
                    onChange={props.onChange} />
        </div>
    );

}

export default StatementInput;