import { SubmitButton, SubmitText } from './styles';

export const CustomSubmitButton  = ({ onPress, text, activeOpacity }) => {
    return (
        <SubmitButton
            activeOpacity={activeOpacity || 0.8}
            onPress={onPress}
        >
            <SubmitText
            >
                {text}
            </SubmitText>
        </SubmitButton>
    );
};