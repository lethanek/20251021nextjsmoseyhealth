import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { DanOHellloWorld01DataFragmentDoc, type DanOHellloWorld01DataFragment } from "@/gql/graphql";

/**
 * Dan O Hello World 01
 * 
 */
export const DanOHellloWorld01Component : CmsComponent<DanOHellloWorld01DataFragment> = ({ data, editProps }) => {
    const componentName = 'Dan O Hello World 01'
    const componentInfo = ''
    return <CmsEditable {...editProps}>
        
        <div>{ data?.Title }</div>

    </CmsEditable>
}
DanOHellloWorld01Component.displayName = "Dan O Hello World 01 (Component/DanOHellloWorld01)"
DanOHellloWorld01Component.getDataFragment = () => ['DanOHellloWorld01Data', DanOHellloWorld01DataFragmentDoc]

export default DanOHellloWorld01Component