import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { DanOHellloWorld01DataFragmentDoc, type DanOHellloWorld01DataFragment } from "@/gql/graphql";

/**
 * Dan O Hello World 01
 * 
 */
export const DanOHellloWorld01Component : CmsComponent<DanOHellloWorld01DataFragment> = ({ data, editProps }) => {
    const componentName = 'Dan O Hello World 01'
    const componentInfo = ''
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>

<div> {data?.Title}</div>

<div><div dangerouslySetInnerHTML={{ __html: data?.Summary?.html }} /></div>

        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
DanOHellloWorld01Component.displayName = "Dan O Hello World 01 (Component/DanOHellloWorld01)"
DanOHellloWorld01Component.getDataFragment = () => ['DanOHellloWorld01Data', DanOHellloWorld01DataFragmentDoc]

export default DanOHellloWorld01Component