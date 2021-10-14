import NextImage from 'next/image';
import utilStyles from '../styles/utils.module.css'
import styled from '@emotion/styled';



const ImgContainer = styled.div`
                position: unset !important;
                height: 700px;
`;
const Image = (props) => {
  const { ...rest } = props;
  return (
    <ImgContainer>
      <NextImage {...rest} layout="fill" />
    </ImgContainer>
  );
};

export default Image;
