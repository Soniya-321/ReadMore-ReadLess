// Write your code here
import {useState} from 'react'
import {Main, Heading, SubHeading, Img, Para, Button} from './styledComponents'
const ReadMore = props => {
  const {reactHooksDescription} = props
  const slicedText = reactHooksDescription.slice(0, 170)

  const [viewMore, setViewMore] = useState(false)

  const onClickBtn = () => {
    setViewMore(prevState => !prevState)
  }

  const text = viewMore ? reactHooksDescription : slicedText

  return (
    <Main>
      <Heading>React Hooks</Heading>
      <SubHeading>Hooks are a new addition to React</SubHeading>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Para>{text}</Para>
      <Button onClick={onClickBtn}>
        {viewMore ? 'Read Less' : 'Read More'}
      </Button>
    </Main>
  )
}

export default ReadMore
