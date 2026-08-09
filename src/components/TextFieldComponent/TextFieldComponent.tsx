import { TextField } from '@mui/material';
import type { FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { TextFieldComponentProps } from './TextFieldComponent.types';

export const TextFieldComponent = <TFieldValues extends FieldValues>({
  control,
  name,
  format,
  parse,
  helperText,
  slotProps,
  ...props
}: TextFieldComponentProps<TFieldValues>) => {
  const { field, fieldState } = useController({ control, name });

  const valorExibido = format ? format(field.value ?? '') : (field.value ?? '');

  return (
    <TextField
      {...props}
      slotProps={{
        ...slotProps,
        inputLabel: { shrink: true, ...slotProps?.inputLabel },
      }}
      inputRef={field.ref}
      name={field.name}
      value={valorExibido}
      onChange={(evento) => {
        const valorBruto = parse
          ? parse(evento.target.value)
          : evento.target.value;
        field.onChange(valorBruto);
      }}
      onBlur={field.onBlur}
      error={!!fieldState.error}
      helperText={fieldState.error?.message ?? helperText}
    />
  );
};
