import React from "react";
import {
    ButtonWithCountry,
    FlexLayout,
    Icon,
    SearchField,
    Text,
    VerticalSpace,
} from "components";

export class NewTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchSuggestions: [],
        }
    }

    componentDidMount() {
        fetch("https://gist.githubusercontent.com/davidzadrazil/43378abbaa2f1145ef50000eccf81a85/raw/d734d8877c2aa9e1e8c1c59bcb7ec98d7f8d8459/countries.json")
            .then(res => res.json())
            .then((result) => this.setState({searchSuggestions: result[0].data}))
    }

    render() {
        return (
            <>
                <FlexLayout justifyContent="space-between">
                    <FlexLayout justifyContent="space-around" flexDirection="column">
                        <Text value="Start new trip" bold fontSize={Text.SIZE.SIZE_28} paragraphs color="#FFFFFF"/>
                        <VerticalSpace size={VerticalSpace.SIZES.SIZE_40}/>
                        <SearchField placeholder="Where do you want to travel?" suggestions={this.state.searchSuggestions} />
                        <VerticalSpace/>
                        <FlexLayout>
                            <ButtonWithCountry onClick={null} label="Austria" icon="flag-austria"/>
                            <ButtonWithCountry onClick={null} label="Germany" icon="flag-germany"/>
                            <ButtonWithCountry onClick={null} label="France" icon="flag-france"/>
                            <ButtonWithCountry onClick={null} label="Sweden" icon="flag-sweden"/>
                            <ButtonWithCountry onClick={null} label="Spain" icon="flag-spain"/>
                        </FlexLayout>
                    </FlexLayout>
                    <Icon name="plane" size={16}/>
                </FlexLayout>
            </>
        );
    }
}
