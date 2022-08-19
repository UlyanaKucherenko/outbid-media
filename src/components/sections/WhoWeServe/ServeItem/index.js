import {Wrap,TextContent, Title, Text, ImgWrap, Img, Link} from "./styled";

import img1 from '../../../../assets/img/sec2-img1.png';

function ServeItem() {
  return (
    <Wrap>
      <ImgWrap>
        <Img src={img1} alt=""/>
      </ImgWrap>
      <TextContent>
        <Title>Businesses</Title>
        <Text>Running a business and looking for new customers to buy your products or services? We have the right
          solutions for you.</Text>
        <Link href="#contact">Contact Us</Link>
      </TextContent>
    </Wrap>
  )
}

export default ServeItem