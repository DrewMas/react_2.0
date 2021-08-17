export default function CarPostingForm() {
    return (
        <div>
            <form>
                <input type="text" name={'model'} placeholder={'Enter a car model'}/>
                <input type="text" name={'price'} placeholder={'Enter car price'}/>
                <input type="text" name={'year'} placeholder={'Enter a production year'}/>
                <input type="submit"/>
            </form>

        </div>
    );
}