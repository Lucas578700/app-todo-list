import React from 'react';
import { View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { StyledTouchableOpacity, StyledTouchableOpacityText } from './styles';

const DatePicker = ({ value, onChange, showPicker, setShowPicker }) => {

  const formattedDate = value instanceof Date
    ? format(value, 'dd/MM/yyyy', { locale: ptBR })
    : '';

  return (
    <View>
      <StyledTouchableOpacity onPress={() => setShowPicker(true)}>
        <StyledTouchableOpacityText>Data Selecionada: {formattedDate}</StyledTouchableOpacityText>
      </StyledTouchableOpacity>
      <DateTimePickerModal
        isVisible={showPicker}
        mode="date"
        onConfirm={(data) => {
          setShowPicker(false);
          onChange(data);
        }}
        onCancel={() => setShowPicker(false)}
        locale={ptBR}
      />
    </View>
  );
};

export default DatePicker;