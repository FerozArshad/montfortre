import {
  DEFAULT_LISTING_NEIGHBORHOODS,
  DEFAULT_PROPERTY_TYPES,
  addCustomNeighborhood,
  addCustomPropertyType,
  loadListingOptionLists,
} from "./listingOptionLists";
import { IconHome, IconTag } from "../blocks/EditorIcons";
import { OptionPicker } from "../shared/OptionPicker";

type NeighborhoodProps = {
  value: string;
  onChange: (value: string) => void;
  extraOptions?: string[];
};

export function ListingNeighborhoodPicker({ value, onChange, extraOptions = [] }: NeighborhoodProps) {
  const lists = loadListingOptionLists();
  const options = [...new Set([...DEFAULT_LISTING_NEIGHBORHOODS, ...lists.neighborhoods, ...extraOptions])];

  return (
    <OptionPicker
      label="Neighborhood"
      icon={<IconHome size={16} />}
      value={value}
      options={options}
      placeholder="Neighborhood name"
      onChange={onChange}
      onAdd={async (name) => {
        addCustomNeighborhood(name);
        return name.trim();
      }}
    />
  );
}

type PropertyTypeProps = {
  value: string;
  onChange: (value: string) => void;
  extraOptions?: string[];
};

export function ListingPropertyTypePicker({ value, onChange, extraOptions = [] }: PropertyTypeProps) {
  const lists = loadListingOptionLists();
  const options = [...new Set([...DEFAULT_PROPERTY_TYPES, ...lists.propertyTypes, ...extraOptions])];

  return (
    <OptionPicker
      label="Property type"
      icon={<IconTag size={16} />}
      value={value}
      options={options}
      placeholder="Property type"
      onChange={onChange}
      onAdd={async (name) => {
        addCustomPropertyType(name);
        return name.trim();
      }}
    />
  );
}
