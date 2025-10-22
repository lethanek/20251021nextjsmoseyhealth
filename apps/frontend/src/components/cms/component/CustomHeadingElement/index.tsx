import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { CustomHeadingElementDataFragmentDoc, type CustomHeadingElementDataFragment } from "@/gql/graphql";

/**
 * Custom Heading Element
 * 
 */
export const CustomHeadingElementComponent : CmsComponent<CustomHeadingElementDataFragment> = ({ data, editProps }) => {
    const componentName = 'Custom Heading Element'
    const componentInfo = ''
    return <CmsEditable className="" {...editProps}>

        <div>{ data?.title }</div>
    </CmsEditable>
}
CustomHeadingElementComponent.displayName = "Custom Heading Element (Component/CustomHeadingElement)"
CustomHeadingElementComponent.getDataFragment = () => ['CustomHeadingElementData', CustomHeadingElementDataFragmentDoc]

export default CustomHeadingElementComponent