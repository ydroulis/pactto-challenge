import React, { Dispatch, SetStateAction } from 'react';
import * as S from './styles';
import SwitchButton from '@/app/components/SwitchButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyInput from '../CurrencyInput';
import Link from 'next/link';
import { IFormValues } from '../../types';
import Field from '../Field';
import InputRadio from '../InputRadio';
import { radioOptions } from '../../radioOptions';
import PublishAndDelete from '../PublishAndDelete';

interface IPackageOptions {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setIsDeleteOpen: Dispatch<SetStateAction<boolean>>;
  formValues: IFormValues;
  handleAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  areaContent: string;
  selectValue: string;
  noChanges: boolean;
  handlePopup: (content: string) => void;
  setSelectValue: Dispatch<SetStateAction<string>>;
}

const PackageOptions: React.FC<IPackageOptions> = ({
  checked,
  handleChange,
  setIsDeleteOpen,
  formValues,
  handleAreaChange,
  areaContent,
  selectValue,
  noChanges,
  handlePopup,
  setSelectValue,
}) => {
  return (
    <S.Package>
      <PublishAndDelete
        checked={checked}
        handleChange={handleChange}
        setIsDeleteOpen={setIsDeleteOpen}
      />

      <S.PackageSettings>
        <S.Column>
          <S.ColumnHeader>
            <h2>1. Describe your package</h2>
          </S.ColumnHeader>
          <S.Description>
            <p>
              Users will see this info on your expert page or in your
              integrations, <Link href="#">view example.</Link>
            </p>
          </S.Description>
          <S.Form>
            <Field
              title="Package name"
              inputType="text"
              value={formValues.name}
              handleChange={handleChange}
              inputName="name"
            />
            <Field
              title="Package description"
              inputType="area"
              value={areaContent}
              handleAreaChange={handleAreaChange}
              inputName="description"
            />
            <Field
              title="Package details (user will view only)"
              inputType="text"
              value={formValues.details}
              handleChange={handleChange}
              inputName="details"
              placeholder="Add details"
            />
            <Field
              title="Package instructions (customers will view too)"
              inputType="text"
              value={formValues.instructions}
              handleChange={handleChange}
              inputName="instructions"
              placeholder="Add instructions"
            />
          </S.Form>
        </S.Column>

        <S.Column>
          <S.ColumnHeader>
            <h2>2. Define requirements for your package</h2>
          </S.ColumnHeader>

          <S.Description>
            <p>
              Users will be able to upload items for you to review. The items
              can be files, links or combinations.
            </p>
          </S.Description>

          <S.Form>
            <S.Field>
              <p>Review type</p>
              <InputRadio
                handleChange={handleChange}
                name="reviewType"
                value={formValues.reviewType}
                options={radioOptions}
              />
            </S.Field>

            {formValues.reviewType === 'singleFile' && (
              <S.Field>
                <p>Review file type</p>
                <InputRadio
                  handleChange={handleChange}
                  name="reviewFileType"
                  options={radioOptions}
                  value={formValues.reviewFileType}
                />
              </S.Field>
            )}
            <Field
              inputName="options"
              inputType="text"
              title="Options for the user to select (tags)"
              value={formValues.options}
              handleChange={handleChange}
              placeholder="Add options"
              link="view example"
              info="The user will be able to select these options when purchasing
                the package. They will become tags in your dashboard"
              className="info"
            />
          </S.Form>
        </S.Column>
        <S.Column>
          <S.ColumnHeader>
            <h2>3. Define its cost and number of reviews</h2>
          </S.ColumnHeader>
          <S.Description>
            <p>
              Users will upload their items for you to review, and they pay your
              review fee.
            </p>
          </S.Description>
          <S.Form>
            <S.RowField>
              <span>Currency</span>
              <CurrencyInput
                list={['USD', 'BRL']}
                selectValue={selectValue}
                setSelectValue={setSelectValue}
              />
            </S.RowField>

            <S.RowField>
              <span>Package cost</span>
              <p>Price</p>
              <S.NumberInput
                type="number"
                min="0"
                step="0.1"
                name="price"
                value={formValues.price}
                onChange={handleChange}
              />
            </S.RowField>

            <S.Info>
              <p>
                This package can result in one single review, or it can be a
                specific number of reviews to be consumed as credits.
              </p>
            </S.Info>

            <S.RowField>
              <div className="container">
                <p className="title">
                  Number of reviews (credits) in this package
                </p>
                <Link href="#">View video explanation</Link>
              </div>
              <S.NumberInput
                type="number"
                min="1"
                name="credits"
                value={formValues.credits}
                onChange={handleChange}
              />
            </S.RowField>

            <S.Info>
              <p>Users can see and buy your package when it’s published.</p>
            </S.Info>
          </S.Form>
          {noChanges ? (
            <S.Button
              className="primary"
              onClick={() => handlePopup('Package published')}
            >
              Publish Package
            </S.Button>
          ) : (
            <S.Button
              className="primary"
              onClick={() => {
                handlePopup('Package info updated');
                setTimeout(() => {
                  handlePopup('Package published');
                }, 1000);
              }}
            >
              Save and Publish Package
            </S.Button>
          )}
        </S.Column>
      </S.PackageSettings>
    </S.Package>
  );
};

export default PackageOptions;
