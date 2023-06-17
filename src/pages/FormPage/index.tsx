import { LabelText } from '../../components/LabelText'
import { Title } from '../../components/Title/styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Controller, useForm } from 'react-hook-form'
import {
  CheckText,
  CheckboxContainer,
  CheckboxItem,
  Container,
  ContainerButton,
  Errordiv,
  FormContainer,
  FormLabelText,
  Header,
  ItemAreaContainer,
  ItemFormContainer,
  LineFormItem,
  SpaceContainer,
} from './styles'
import { Select } from '../../components/Select'
import { Button } from '../../components/Button'
import Input from '../../components/InputWrapper'
import { InputIncremental } from '../../components/InputIncremetal'
import { CheckBox } from '../../components/Checkbox'
import { TextArea } from '../../components/TextArea/styles'
export function FormPage() {
  const formValidationSchema = zod.object({
    deadline: zod.string().nonempty('Este campo é obrigatório'),
    reservaDE: zod.string().nonempty('Este campo é obrigatório'),
    reservaPARA: zod.string().nonempty('Este campo é obrigatório'),
    target: zod.string().nonempty('Este campo é obrigatório'),
    relocation: zod.string(),
    daysprotection: zod.number(),
    PdeLiberation: zod.number(),
    filter: zod.string().nonempty('Este campo é obrigatório'),
    considerexternal: zod.boolean(),
    protectitens: zod.boolean(),
    skutextarea: zod.string(),
    salesagency: zod.string().nonempty('Este campo é obrigatório'),
    grouperclient: zod.string(),
  })
  type CreateSimulationData = zod.infer<typeof formValidationSchema>

  const options = [
    { value: 'value1', label: 'Label 1' },
    { value: 'value2', label: 'Label 2' },
  ]

  const { handleSubmit, formState, control } = useForm<CreateSimulationData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      deadline: '2024-06-16',
      reservaDE: '',
      reservaPARA: '',
      target: '',
      relocation: '',
      daysprotection: 0,
      filter: '',
      considerexternal: false,
      protectitens: false,
      skutextarea: '',
      salesagency: '',
      grouperclient: '',
    },
  })

  const onSubmit = (data: CreateSimulationData) => {
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Title>Lucy</Title>
      </Header>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <LineFormItem>
          <ItemFormContainer>
            <FormLabelText>
              <LabelText htmlFor="deadline">Data Limite</LabelText>
            </FormLabelText>
            <Controller
              name="deadline"
              control={control}
              render={({ field }) => <Input type="date" {...field} />}
            />
            {formState.errors.deadline && (
              <Errordiv>Este campo é obrigatório</Errordiv>
            )}
          </ItemFormContainer>
          <ItemFormContainer>
            <FormLabelText>
              <LabelText htmlFor="target">Target Reserva</LabelText>
            </FormLabelText>
            <Controller
              name="target"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  options={options}
                  id="selecttarget"
                />
              )}
            />
            {formState.errors.target && (
              <Errordiv>Este campo é obrigatório</Errordiv>
            )}
          </ItemFormContainer>
        </LineFormItem>
        <LineFormItem>
          <ItemFormContainer>
            <FormLabelText>
              <LabelText htmlFor="reservaDE">Reservas DE</LabelText>
            </FormLabelText>
            <Controller
              name="reservaDE"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  options={options}
                  id="selectDE"
                />
              )}
            />

            {formState.errors.reservaDE && (
              <Errordiv>Este campo é obrigatório</Errordiv>
            )}
          </ItemFormContainer>

          <ItemFormContainer>
            <FormLabelText>
              <LabelText htmlFor="reservaPARA">Reservas PARA</LabelText>
            </FormLabelText>
            <Controller
              name="reservaPARA"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  options={options}
                  id="selectPARA"
                />
              )}
            />
            {formState.errors.reservaPARA && (
              <Errordiv>Este campo é obrigatório</Errordiv>
            )}
          </ItemFormContainer>
        </LineFormItem>
        <SpaceContainer />
        <LineFormItem>
          <ItemFormContainer>
            <FormLabelText>
              <LabelText htmlFor="target">Percentual de Liberação</LabelText>
            </FormLabelText>
            <Controller
              name="PdeLiberation"
              control={control}
              render={({ field }) => (
                <InputIncremental onValueChange={field.onChange} />
              )}
            />
            {formState.errors.target && (
              <Errordiv>Este campo é obrigatório</Errordiv>
            )}
          </ItemFormContainer>
          <ItemFormContainer>
            <FormLabelText>
              <LabelText htmlFor="target">Dias de Proteção</LabelText>
            </FormLabelText>
            <Controller
              name="PdeLiberation"
              control={control}
              render={({ field }) => (
                <InputIncremental onValueChange={field.onChange} />
              )}
            />
            {formState.errors.target && (
              <Errordiv>Este campo é obrigatório</Errordiv>
            )}
          </ItemFormContainer>
          <ItemFormContainer>
            <FormLabelText>
              <LabelText htmlFor="reservaPARA">Filtro Carteira</LabelText>
            </FormLabelText>
            <Controller
              name="reservaPARA"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  options={options}
                  id="selectPARA"
                />
              )}
            />
            {formState.errors.reservaPARA && (
              <Errordiv>Este campo é obrigatório</Errordiv>
            )}
          </ItemFormContainer>
        </LineFormItem>
        <LineFormItem>
          <CheckboxContainer>
            <CheckboxItem>
              <Controller
                name="considerexternal"
                control={control}
                render={({ field }) => (
                  <CheckBox onValueChange={field.onChange} id="c3" />
                )}
              />
              <CheckText htmlFor="c3">Considera Externos</CheckText>
            </CheckboxItem>
            <CheckboxItem>
              <Controller
                name="considerexternal"
                control={control}
                render={({ field }) => (
                  <CheckBox onValueChange={field.onChange} id="c3" />
                )}
              />
              <CheckText htmlFor="c3">Proteger Itens Críticos</CheckText>
            </CheckboxItem>
          </CheckboxContainer>
        </LineFormItem>
        <LineFormItem>
          <ItemAreaContainer>
            <FormLabelText>
              <LabelText htmlFor="reservaPARA">Sku não crítico</LabelText>
            </FormLabelText>
            <Controller
              name="reservaPARA"
              control={control}
              render={({ field }) => <TextArea></TextArea>}
            />
            {formState.errors.reservaPARA && (
              <Errordiv>Este campo é obrigatório</Errordiv>
            )}
          </ItemAreaContainer>
        </LineFormItem>
        <LineFormItem>
          <ItemFormContainer>
            <FormLabelText>
              <LabelText htmlFor="reservaPARA">Agencia de vendas D2C</LabelText>
            </FormLabelText>
            <Controller
              name="reservaPARA"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  options={options}
                  id="selectPARA"
                />
              )}
            />
            {formState.errors.reservaPARA && (
              <Errordiv>Este campo é obrigatório</Errordiv>
            )}
          </ItemFormContainer>
        </LineFormItem>
        <LineFormItem>
          <ItemAreaContainer>
            <FormLabelText>
              <LabelText htmlFor="reservaPARA">Cliente Agrupador</LabelText>
            </FormLabelText>
            <Controller
              name="reservaPARA"
              control={control}
              render={({ field }) => <TextArea></TextArea>}
            />
            {formState.errors.reservaPARA && (
              <Errordiv>Este campo é obrigatório</Errordiv>
            )}
          </ItemAreaContainer>
        </LineFormItem>

        <ContainerButton>
          <Button type="submit">Update</Button>
          <Button type="submit">Run Model</Button>
        </ContainerButton>
      </FormContainer>
    </Container>
  )
}
