import { 
  Card,
} from '@shopify/polaris';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';
import Action from '../ActionText/Action';
import { AddSvg } from '../Svgs/SvgFiles';
import DragDrod from '../DragDrop/DragDrod';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const QuestionList = ({loadQuestion}) => {
/* questionList */
  const { createQuestion , actionCreateQuestion_Fn} = contextDiagnostic();

  const actionEvent = () => {
    actionCreateQuestion_Fn(!createQuestion)
  }

    return (
      
      <Card >
        <Card.Section title="List of questions">
        </Card.Section>
        
        <Card.Section >
          <p>Select or drag a question</p>
          {loadQuestion && <LoadingSpinner/>}
        {/* lisy question dragables */}
          <DragDrod/>
          
        </Card.Section>
         
        <Card.Section >
          <div onClick={actionEvent}>
            <Action
              textDescription='Add a question' 
              eventAction={actionEvent}
              btnSvg={<AddSvg/>}
            />
          </div>
        </Card.Section>
      </Card>
    )
  
}

export default QuestionList