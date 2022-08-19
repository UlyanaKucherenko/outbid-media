import {Img, RowItem, Subtitle, Text, WrapImg, WrapText} from "./styled";

function SectionBlock({item, reverse}) {
  return (
    <RowItem reverse={reverse}>
      <WrapImg>
        <Img src={require(`../../../../assets/img/sec1-${item.img}.png`)} alt=""/>
      </WrapImg>
      <WrapText>
        <Subtitle>{item.title}</Subtitle>
        <Text>{item.text1}</Text>
        <Text>{item.text2}</Text>
      </WrapText>
    </RowItem>
  )
}

export default SectionBlock