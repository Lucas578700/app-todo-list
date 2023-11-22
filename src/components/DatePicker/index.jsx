import React from "react";
import { Controller } from "react-hook-form";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyledTouchableOpacity, StyledTouchableOpacityText } from "./styles";

export const DatePicker = ({
  control,
  value,
  onChange,
  showPicker,
  setShowPicker,
}) => {
  const formattedDate =
    value instanceof Date
      ? format(value, "dd/MM/yyyy", { locale: ptBR })
      : value
      ? value
      : "";

  return (
    <Controller
      control={control}
      defaultValue={formattedDate}
      render={({ field: { onChange, value } }) => (
        <>
          <StyledTouchableOpacity onPress={() => setShowPicker(true)}>
            <StyledTouchableOpacityText>
              <Icon name="calendar" size={20} color="#fff" /> Datas Selecionada:{" "}
              {formattedDate}
            </StyledTouchableOpacityText>
          </StyledTouchableOpacity>

          <DateTimePickerModal
            isVisible={showPicker}
            mode="date"
            date={new Date()}
            onConfirm={(data) => {
              setShowPicker(false);
              onChange(data);
            }}
            onCancel={() => setShowPicker(false)}
            locale={ptBR}
          />
        </>
      )}
      name="deadline"
    />
  );
};
