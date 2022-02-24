import {
  flexCenterStyle,
  flexWidth,
  palette2,
  radius,
  RcBox,
  RcClasses,
  RcDialDelete,
  RcDialer,
  RcDialerPadSounds,
  RcDialPad,
  RcDialTextField,
  RcDownshiftDefaultFilterOptions,
  RcGlobalScrollBarStyle,
  RcDownshiftSelectedItem,
  RcIconButton,
  RcListItemSecondaryAction,
  RcMenuItem,
  RcSelect,
  RcSelectProps,
  RcText,
  shadows,
  spacing,
  styled,
  typography,
  useDownshift,
  RcIcon,
  RcSuggestionList,
  RcListItemText,
  RcAvatar,
} from '@ringcentral/juno';
import {
  Deletenumber,
  IncallBorder,
  Minimize,
  Phone,
  Dialer as DialerSvg,
  TimeBorder,
} from '@ringcentral/juno-icon';
import { ComponentProps, FunctionComponent, useRef, useState } from 'react';

export const options = [
  { id: 'phone_1', label: 'Afghanistan' },
  { id: 'phone_2', label: 'Aland Islands' },
  { id: 'phone_3', label: 'Bahamas' },
  { id: 'phone_4', label: 'Bahrain' },
  { id: 'phone_5', label: 'China' },
  { id: 'phone_6', label: 'Algeria' },
  { id: 'phone_7', label: 'American Samoa' },
  { id: 'phone_8', label: 'Andorra' },
  { id: 'phone_9', label: 'Angola' },
  { id: 'phone_10', label: 'Anguilla' },
  { id: 'phone_11', label: 'Antarctica' },
  { id: 'phone_12', label: 'Antigua and Barbuda' },
  { id: 'phone_13', label: 'Argentina' },
  { id: 'phone_14', label: 'Armenia' },
  {
    id: 'phone_15',
    label: "This item couldn't Selectable",
    unSelectable: true,
  },
  { id: 'phone_16', label: '木星' },
  { id: 'phone_16_2', label: '木星_1' },
  { id: 'phone_16_3', label: '木星_2' },
  { id: 'phone_16_4', label: '木星_3' },
  { id: 'phone_17', label: '鈴盛軟件' },
  { id: 'phone_18', label: '整合' },
].sort((a, b) => {
  const nameA = a.label.toUpperCase(); // ignore upper and lowercase
  const nameB = b.label.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}) as RcDownshiftSelectedItem[];

type DialerProps = ComponentProps<typeof RcDialPad> & {
  onMinimize?: () => void;
};

const DialerWrapper = styled.div`
  width: 280px;
  overflow: hidden;
  box-shadow: ${shadows('16')};
  background: ${palette2('neutral', 'elevation')};
  border-radius: ${radius('xl')};
`;

const Header = styled.header`
  background-color: ${palette2('dialHeader', 'bg')};

  color: ${palette2('dialHeader', 'text')};
  padding: ${spacing(0, 4)};
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
`;

const Body = styled.main`
  position: relative;
  padding: ${spacing(0, 6, 6)};
`;

const TextFieldWrapper = styled.div<{ isHaveValue: boolean }>`
  display: flex;
  align-items: center;
  padding: ${spacing(1, 0, 3)};

  ${RcDialTextField} {
    padding-left: ${({ isHaveValue }) => isHaveValue && spacing(6)};

    margin: ${spacing(0, 3)};
    position: relative;

    input {
      color: ${palette2('dialHeader', 'text')};
      caret-color: ${palette2('dialHeader', 'text')};

      &::placeholder {
        color: ${palette2('dialHeader', 'textHint')};
        ${typography('subheading1')}
        ${flexCenterStyle};
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }

  ${RcIconButton} {
    align-self: flex-start;
  }
`;

const customSelectInputClasses = RcClasses<RcSelectProps['InputProps']>(
  ['root'],
  'custom-select-input'
);

const BodyTop = styled.div`
  ${flexCenterStyle};
  padding-top: ${spacing(1.5)};

  ${RcSelect} {
    width: auto;

    .${customSelectInputClasses.root} {
      &,
      &:hover {
        background-color: transparent;
      }
    }
  }
`;

const BodyBottom = styled.div`
  ${flexCenterStyle};
  margin-top: ${spacing(6)};

  && {
    ${RcIcon} {
      font-size: 28px;
    }
  }
`;

const SearchWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${palette2('neutral', 'elevation')};

  ${RcListItemSecondaryAction} {
    ${flexWidth('88px')};
    justify-content: space-between;
  }
`;

const DialerActionIconButton = styled(RcIconButton)`
  position: absolute;
  right: 0;
  top: 0;
  margin-right: ${spacing(4)};
  transform: translateY(-50%);
  z-index: 1;
`;

const menus = [
  { id: 1, value: '(000) 000-0000' },
  { id: 2, value: '(000) 000-0000' },
  { id: 3, value: '(000) 000-0000' },
  { id: 4, value: '(000) 000-0000' },
];

export const FullDialer: FunctionComponent<DialerProps> = ({
  children,
  onMinimize,
  ...rest
}) => {
  const [value, setValue] = useState('');

  const isHaveValue = value.length > 0;

  const inputRef = useRef<HTMLInputElement>(null);

  const {
    optionItems,
    highlightedIndex,
    getToggleButtonProps,
    getTagListBoxProps,
    getMenuProps,
    getInputProps,
    getInputAriaProps,
    getLabelProps,
    getItemProps,
    isOpen,
    inputValue,
    changeHighlightedIndexReason,
    isKeepHighlightedIndex,
    // setHighlightedIndex,
    // keepHighlightedIndex,
    // closeMenu,
    // openMenu,
    // reset,
  } = useDownshift({
    inputRef,
    value: [],
    inputValue: value,
    options,
    freeSolo: true,
    keyToTags: ['-'],
    autoHighlight: true,
    addNoOptionItem: 'first',
    onChange: ([e]) => {
      // trigger action
      console.log('select item', e);
    },
    onInputChange: (e) => {
      console.log('inputChange', e);
      setValue(e || '');
    },
    filterOptions: RcDownshiftDefaultFilterOptions,
  });

  const { onBlur, ...InputProps } = getInputProps();

  return (
    <RcDialer {...rest}>
      <RcGlobalScrollBarStyle />
      <DialerWrapper>
        <Header>
          <HeaderTitle>
            <RcText variant="body1" color="dialHeader.text">
              New Call
            </RcText>
            <RcBox flex="1 1 auto" />
            <RcIconButton
              variant="plain"
              symbol={Minimize}
              onClick={onMinimize}
              size="small"
              color="dialHeader.icon"
            />
          </HeaderTitle>
          <TextFieldWrapper isHaveValue={isHaveValue}>
            <RcDialTextField
              inputRef={inputRef}
              InputLabelProps={getLabelProps()}
              InputProps={{
                // inputComponent: RcDownshiftInput,
                ...(getTagListBoxProps() as any),
                ...InputProps,
              }}
              inputProps={{
                maxLength: 30,
                ...getInputAriaProps(),
              }}
              value={value}
              fullWidth
              align="center"
              onChange={setValue}
              placeholder="Enter a number"
            />
            {isHaveValue && (
              <RcDialDelete>
                <RcIconButton
                  symbol={Deletenumber}
                  data-sign="deleteButton"
                  color="dialHeader.icon"
                  title="delete"
                  variant="plain"
                  size="large"
                />
              </RcDialDelete>
            )}
          </TextFieldWrapper>
        </Header>
        <Body>
          <BodyTop>
            <RcText color="neutral.f02" variant="caption2">
              Call from:
            </RcText>
            <RcSelect
              value={1}
              variant="box"
              textVariant="caption1"
              InputProps={{
                classes: customSelectInputClasses,
              }}
            >
              {menus.map((item) => (
                <RcMenuItem value={item.id} key={item.id}>
                  {item.value}
                </RcMenuItem>
              ))}
            </RcSelect>
          </BodyTop>
          <RcDialPad
            sounds={RcDialerPadSounds}
            getDialPadButtonProps={(v) => ({ 'data-test-id': `${v}` })}
            // {...dialKeyboardProps}
          />
          <BodyBottom>
            <RcIconButton
              color="success.b03"
              symbol={Phone}
              size="xxlarge"
              variant="contained"
              elevation="0"
              activeElevation="0"
            />
          </BodyBottom>

          <DialerActionIconButton
            variant="contained"
            activeElevation="1"
            color="neutral.elevation"
            size="small"
            symbol={isOpen ? DialerSvg : TimeBorder}
            {...getToggleButtonProps()}
          />

          {isOpen && (
            <SearchWrapper>
              <div>
                <BodyTop>
                  <RcText color="neutral.f02" variant="caption2">
                    Call from:
                  </RcText>
                  <RcSelect
                    value={1}
                    variant="box"
                    textVariant="caption1"
                    InputProps={{
                      classes: customSelectInputClasses,
                    }}
                  >
                    {menus.map((item) => (
                      <RcMenuItem value={item.id} key={item.id}>
                        {item.value}
                      </RcMenuItem>
                    ))}
                  </RcSelect>
                </BodyTop>
              </div>

              <RcBox flex="1 1 auto">
                <RcSuggestionList
                  highlightedIndex={highlightedIndex}
                  options={optionItems}
                  // * you can custom render with render Option
                  inputValue={inputValue}
                  getItemProps={getItemProps}
                  getMenuProps={getMenuProps}
                  changeHighlightedIndexReason={changeHighlightedIndexReason}
                  isKeepHighlightedIndex={isKeepHighlightedIndex}
                  renderOption={(
                    {
                      label,
                      freeSolo,
                      id,
                      error,
                      unSelectable,
                      isSuggestion,
                      isError,
                      ...restProps
                    },
                    state
                  ) => {
                    return (
                      <RcMenuItem
                        id={`${id}`}
                        component="div"
                        selected={state.selected}
                        avatar={<RcAvatar size="small" />}
                        {...restProps}
                      >
                        <RcListItemText primary={label} secondary="ext. 000" />
                        <RcListItemSecondaryAction>
                          <RcIcon size="medium" symbol={IncallBorder} />
                          2021/6/11
                        </RcListItemSecondaryAction>
                      </RcMenuItem>
                    );
                  }}
                />
              </RcBox>
            </SearchWrapper>
          )}
        </Body>
      </DialerWrapper>
    </RcDialer>
  );
};
