import Card from "../Card";

const Form = () => {
    return (
        <Card>
            <Form>
            <table className="container">
                <tr>
                    <td>Name</td>
                    <input type="text" />
                </tr>
                <tr>
                    <td>Amount</td>
                    <input type="text" />
                </tr>
                <tr>
                    <td>Date</td>
                    <input type="text" />
                </tr>
            </table>
            <div>
                <button type="submit">ADD</button>
                <button type="cancel">CANCEL</button>
            </div>
            </Form>   
        </Card>
    )
}

export default Form;
