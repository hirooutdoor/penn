import { CodeBlock, atomOneDark } from 'react-code-blocks';

type Props = {
  inputCode: {
    code: string;
    language: string;
    showLineNumbers: boolean;
  };
};

const MyCodeBlock = ({ inputCode }: Props) => {
  const { code, language, showLineNumbers } = inputCode;

  return (
    <CodeBlock text={code} language={language} showLineNumbers={showLineNumbers} theme={atomOneDark} />
  );
};

export default MyCodeBlock;
