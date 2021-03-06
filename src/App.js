import styled from 'styled-components'
import MonthYearSlider from './Components/MonthYearSlider'
import DateSlider from './Components/DateSlider'
import TimeSlider from './Components/TimeSlider'
import HourSlider from './Components/subSliders/HourSlider';
import MinuteSlider from './Components/subSliders/MinuteSlider';
import SecondSlider from './Components/subSliders/SecondSlider';


function App() {
  return (
    <MainContainer>
      <Container>

        <Heading>Month-Year Slider</Heading>
        <MonthYearSlider />

        <Heading>Date Slider</Heading>
        <DateSlider />

        <Heading>Time Slider</Heading>
        <TimeSlider />
        
        <Heading>Hour Slider</Heading>
        <HourSlider />
        
        <Heading>Minutes Slider</Heading>
        <MinuteSlider />

        <Heading>Seconds Slider</Heading>
        <SecondSlider />
      </Container>
    </MainContainer>
  );
}

const Container = styled.div`
  padding: 25px;
  width: 50%;
  // display: flex;  
  // align-items: center;
  border: 1px solid grey;
  box-shadow: 1px 1px 9px -1px;
`;

const MainContainer = styled.div`
  text-align: -webkit-center;
  height: 100%;
`;

const Heading = styled.p`
  font-size: 15px;
  margin-top: 8%;
  font-family: calibri;
  font-weight: 600;
  font-variant-caps: small-caps;
`;

export default App;
