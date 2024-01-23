exports.id=457,exports.ids=[457],exports.modules={1064:(e,t,r)=>{function i(e){for(let t in e)void 0===e[t]&&delete e[t];return e}function o(e,t,r){var o;if("string"==typeof t){let[e,i]=t.split(" ");r=Object.assign(i?{method:e,url:i}:{url:e},r)}else r=Object.assign({},t);r.headers=(o=r.headers)?Object.keys(o).reduce((e,t)=>(e[t.toLowerCase()]=o[t],e),{}):{},i(r),i(r.headers);let n=function e(t,r){let i=Object.assign({},t);return Object.keys(r).forEach(o=>{(function(e){if("object"!=typeof e||null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;let t=Object.getPrototypeOf(e);if(null===t)return!0;let r=Object.prototype.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Function.prototype.call(r)===Function.prototype.call(e)})(r[o])&&o in t?i[o]=e(t[o],r[o]):Object.assign(i,{[o]:r[o]})}),i}(e||{},r);return"/graphql"===r.url&&(e&&e.mediaType.previews?.length&&(n.mediaType.previews=e.mediaType.previews.filter(e=>!n.mediaType.previews.includes(e)).concat(n.mediaType.previews)),n.mediaType.previews=(n.mediaType.previews||[]).map(e=>e.replace(/-preview/,""))),n}r.r(t),r.d(t,{GitHubApi:()=>GitHubApi});let n=/\{[^}]+\}/g;function a(e){return e.replace(/^\W+|\W+$/g,"").split(/,/)}function s(e,t){let r={__proto__:null};for(let i of Object.keys(e))-1===t.indexOf(i)&&(r[i]=e[i]);return r}function l(e){return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e}).join("")}function u(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e,t,r){return(t="+"===e||"#"===e?l(t):u(t),r)?u(r)+"="+t:t}function h(e){return null!=e}function d(e){return";"===e||"&"===e||"?"===e}function m(e,t){var r=["+","#",".","/",";","?","&"];return"/"===(e=e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(e,i,o){if(!i)return l(o);{let e="",o=[];if(-1!==r.indexOf(i.charAt(0))&&(e=i.charAt(0),i=i.substr(1)),i.split(/,/g).forEach(function(r){var i=/([^:\*]*)(?::(\d+)|(\*))?/.exec(r);o.push(function(e,t,r,i){var o=e[r],n=[];if(h(o)&&""!==o){if("string"==typeof o||"number"==typeof o||"boolean"==typeof o)o=o.toString(),i&&"*"!==i&&(o=o.substring(0,parseInt(i,10))),n.push(c(t,o,d(t)?r:""));else if("*"===i)Array.isArray(o)?o.filter(h).forEach(function(e){n.push(c(t,e,d(t)?r:""))}):Object.keys(o).forEach(function(e){h(o[e])&&n.push(c(t,o[e],e))});else{let e=[];Array.isArray(o)?o.filter(h).forEach(function(r){e.push(c(t,r))}):Object.keys(o).forEach(function(r){h(o[r])&&(e.push(u(r)),e.push(c(t,o[r].toString())))}),d(t)?n.push(u(r)+"="+e.join(",")):0!==e.length&&n.push(e.join(","))}}else";"===t?h(o)&&n.push(u(r)):""===o&&("&"===t||"?"===t)?n.push(u(r)+"="):""===o&&n.push("");return n}(t,e,i[1],i[2]||i[3]))}),!e||"+"===e)return o.join(",");var n=",";return"?"===e?n="&":"#"!==e&&(n=e),(0!==o.length?e:"")+o.join(n)}}))?e:e.replace(/\/$/,"")}function p(e){let t,r=e.method.toUpperCase(),i=(e.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),o=Object.assign({},e.headers),l=s(e,["method","baseUrl","url","headers","request","mediaType"]),u=function(e){let t=e.match(n);return t?t.map(a).reduce((e,t)=>e.concat(t),[]):[]}(i);i=({expand:m.bind(null,i)}).expand(l),/^http/.test(i)||(i=e.baseUrl+i);let c=s(l,Object.keys(e).filter(e=>u.includes(e)).concat("baseUrl"));if(!/application\/octet-stream/i.test(o.accept)&&(e.mediaType.format&&(o.accept=o.accept.split(/,/).map(t=>t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${e.mediaType.format}`)).join(",")),i.endsWith("/graphql")&&e.mediaType.previews?.length)){let t=o.accept.match(/[\w-]+(?=-preview)/g)||[];o.accept=t.concat(e.mediaType.previews).map(t=>{let r=e.mediaType.format?`.${e.mediaType.format}`:"+json";return`application/vnd.github.${t}-preview${r}`}).join(",")}return["GET","HEAD"].includes(r)?i=function(e,t){let r=/\?/.test(e)?"&":"?",i=Object.keys(t);return 0===i.length?e:e+r+i.map(e=>"q"===e?"q="+t.q.split("+").map(encodeURIComponent).join("+"):`${e}=${encodeURIComponent(t[e])}`).join("&")}(i,c):"data"in c?t=c.data:Object.keys(c).length&&(t=c),o["content-type"]||void 0===t||(o["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(r)&&void 0===t&&(t=""),Object.assign({method:r,url:i,headers:o},void 0!==t?{body:t}:null,e.request?{request:e.request}:null)}function g(e,t,r){return p(o(e,t,r))}function f(){return"object"==typeof navigator&&"userAgent"in navigator?navigator.userAgent:"object"==typeof process&&void 0!==process.version?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}let y=function e(t,r){let i=o(t,r);return Object.assign(g.bind(null,i),{DEFAULTS:i,defaults:e.bind(null,i),merge:o.bind(null,i),parse:p})}(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":`octokit-endpoint.js/9.0.4 ${f()}`},mediaType:{format:""}});let Deprecation=class Deprecation extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="Deprecation"}};var w=r(778),v=r.n(w);let b=v()(e=>console.warn(e)),C=v()(e=>console.warn(e));let RequestError=class RequestError extends Error{constructor(e,t,r){let i;super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=t,"headers"in r&&void 0!==r.headers&&(i=r.headers),"response"in r&&(this.response=r.response,i=r.response.headers);let o=Object.assign({},r.request);r.request.headers.authorization&&(o.headers=Object.assign({},r.request.headers,{authorization:r.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),o.url=o.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=o,Object.defineProperty(this,"code",{get:()=>(b(new Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),t)}),Object.defineProperty(this,"headers",{get:()=>(C(new Deprecation("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.")),i||{})})}};function $(e){let t,r;let i=e.request&&e.request.log?e.request.log:console,o=e.request?.parseSuccessResponseBody!==!1;((function(e){if("object"!=typeof e||null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;let t=Object.getPrototypeOf(e);if(null===t)return!0;let r=Object.prototype.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Function.prototype.call(r)===Function.prototype.call(e)})(e.body)||Array.isArray(e.body))&&(e.body=JSON.stringify(e.body));let n={},{fetch:a}=globalThis;if(e.request?.fetch&&(a=e.request.fetch),!a)throw Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");return a(e.url,{method:e.method,body:e.body,headers:e.headers,signal:e.request?.signal,...e.body&&{duplex:"half"}}).then(async a=>{for(let e of(r=a.url,t=a.status,a.headers))n[e[0]]=e[1];if("deprecation"in n){let t=n.link&&n.link.match(/<([^>]+)>; rel="deprecation"/),r=t&&t.pop();i.warn(`[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${n.sunset}${r?`. See ${r}`:""}`)}if(204!==t&&205!==t){if("HEAD"===e.method){if(t<400)return;throw new RequestError(a.statusText,t,{response:{url:r,status:t,headers:n,data:void 0},request:e})}if(304===t)throw new RequestError("Not modified",t,{response:{url:r,status:t,headers:n,data:await R(a)},request:e});if(t>=400){let i=await R(a);throw new RequestError("string"==typeof i?i:"message"in i?Array.isArray(i.errors)?`${i.message}: ${i.errors.map(JSON.stringify).join(", ")}`:i.message:`Unknown error: ${JSON.stringify(i)}`,t,{response:{url:r,status:t,headers:n,data:i},request:e})}return o?await R(a):a.body}}).then(e=>({status:t,url:r,headers:n,data:e})).catch(t=>{if(t instanceof RequestError||"AbortError"===t.name)throw t;let r=t.message;throw"TypeError"===t.name&&"cause"in t&&(t.cause instanceof Error?r=t.cause.message:"string"==typeof t.cause&&(r=t.cause)),new RequestError(r,500,{request:e})})}async function R(e){let t=e.headers.get("content-type");return/application\/json/.test(t)?e.json().catch(()=>e.text()).catch(()=>""):!t||/^text\/|charset=utf-8$/.test(t)?e.text():e.arrayBuffer()}let G=function e(t,r){let i=t.defaults(r);return Object.assign(function(t,r){let o=i.merge(t,r);if(!o.request||!o.request.hook)return $(i.parse(o));let n=(e,t)=>$(i.parse(i.merge(e,t)));return Object.assign(n,{endpoint:i,defaults:e.bind(null,i)}),o.request.hook(n,o)},{endpoint:i,defaults:e.bind(null,i)})}(y,{headers:{"user-agent":`octokit-request.js/8.1.6 ${f()}`}});var P=class extends Error{constructor(e,t,r){super(`Request failed due to following response errors:
`+r.errors.map(e=>` - ${e.message}`).join("\n")),this.request=e,this.headers=t,this.response=r,this.name="GraphqlResponseError",this.errors=r.errors,this.data=r.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},S=["method","baseUrl","url","headers","request","query","mediaType"],H=["query","method","url"],U=/\/api\/v3\/?$/,D=function e(t,r){let i=t.defaults(r);return Object.assign((e,t)=>(function(e,t,r){if(r){if("string"==typeof t&&"query"in r)return Promise.reject(Error('[@octokit/graphql] "query" cannot be used as variable name'));for(let e in r)if(H.includes(e))return Promise.reject(Error(`[@octokit/graphql] "${e}" cannot be used as variable name`))}let i="string"==typeof t?Object.assign({query:t},r):t,o=Object.keys(i).reduce((e,t)=>(S.includes(t)?e[t]=i[t]:(e.variables||(e.variables={}),e.variables[t]=i[t]),e),{}),n=i.baseUrl||e.endpoint.DEFAULTS.baseUrl;return U.test(n)&&(o.url=n.replace(U,"/api/graphql")),e(o).then(e=>{if(e.data.errors){let t={};for(let r of Object.keys(e.headers))t[r]=e.headers[r];throw new P(o,t,e.data)}return e.data.data})})(i,e,t),{defaults:e.bind(null,i),endpoint:i.endpoint})}(G,{headers:{"user-agent":`octokit-graphql.js/7.0.2 ${f()}`},method:"POST",url:"/graphql"}),q=r(9496),F=r(1177),E=r(7338),M=r(4575),A=r(4321),x=r(2075),k=r(7925),T=r(2800),_=r(5148),I=r(4241),B=r(4336),O=r(6004),j=r(6398),N=r(4627),L=r(4550),Y=r(998),V=Object.defineProperty,W=Object.getOwnPropertyDescriptor,z=(e,t,r,i)=>{for(var o,n=i>1?void 0:i?W(t,r):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&V(t,r,n),n};let Q=Object.freeze({values:[]}),J=Object.freeze({ranges:[]}),X=`
assignees(first: 10) {
	nodes {
		login
		avatarUrl
		url
	}
}
author {
	login
	avatarUrl
	url
}
baseRefName
baseRefOid
baseRepository {
	name
	owner {
		login
	}
	url
}
checksUrl
isDraft
isCrossRepository
isReadByViewer
headRefName
headRefOid
headRepository {
	name
	owner {
		login
	}
	url
}
permalink
id
number
title
state
additions
deletions
updatedAt
closedAt
mergeable
mergedAt
mergedBy {
	login
}
repository {
	isFork
	owner {
		login
	}
}
reviewDecision
reviewRequests(first: 10) {
	nodes {
		asCodeOwner
		id
		requestedReviewer {
			... on User {
				login
				avatarUrl
				url
			}
		}
	}
}
totalCommentsCount
`,K=`
... on Issue {
	assignees(first: 100) {
		nodes {
			login
			url
			avatarUrl
		}
	}
	author {
		login
		avatarUrl
		url
	}
	comments {
	  totalCount
	}
	id
	number
	title
	url
	createdAt
	closedAt
	closed
	updatedAt
	labels(first: 20) {
		nodes {
			color
			name
		}
	}
	reactions(content: THUMBS_UP) {
	  totalCount
	}
	repository {
		name
		owner {
			login
		}
	}
}
`;let GitHubApi=class GitHubApi{_onDidReauthenticate=new q.EventEmitter;get onDidReauthenticate(){return this._onDidReauthenticate.event}_disposable;constructor(e){this._disposable=_.D.onDidChangeAny(e=>{(_.D.changedCore(e,["http.proxy","http.proxyStrictSSL"])||_.D.changed(e,["outputLevel","proxy"]))&&this.resetCaches()})}dispose(){this._disposable.dispose()}resetCaches(){this._proxyAgent=null,this._defaults.clear(),this._enterpriseVersions.clear()}_proxyAgent=null;get proxyAgent(){if(!E.$L)return null===this._proxyAgent&&(this._proxyAgent=(0,F.Nx)()),this._proxyAgent}async getAccountForCommit(e,t,r,i,o,n){let a=(0,O.UH)();try{let s=`query getAccountForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				author {
					name
					email
					avatarUrl(size: $avatarSize)
				}
			}
		}
	}
}`,l=await this.graphql(e,t,s,{...n,owner:r,repo:i,ref:o},a),u=l?.repository?.object?.author;if(null==u)return;return{provider:e,name:u.name??void 0,email:u.email??void 0,avatarUrl:!u.avatarUrl||Z(n)?u.avatarUrl??void 0:u.email&&n?.baseUrl!=null?await this.createEnterpriseAvatarUrl(e,t,n.baseUrl,u.email,n.avatarSize):void 0}}catch(t){if(t instanceof M.Ww)return;throw this.handleException(t,e,a)}}async getAccountForEmail(e,t,r,i,o,n){let a=(0,O.UH)();try{let s=`query getAccountForEmail(
	$emailQuery: String!
	$avatarSize: Int
) {
	search(type: USER, query: $emailQuery, first: 1) {
		nodes {
			... on User {
				name
				email
				avatarUrl(size: $avatarSize)
			}
		}
	}
}`,l=await this.graphql(e,t,s,{...n,owner:r,repo:i,emailQuery:`in:email ${o}`},a),u=l?.search?.nodes?.[0];if(null==u)return;return{provider:e,name:u.name??void 0,email:u.email??void 0,avatarUrl:!u.avatarUrl||Z(n)?u.avatarUrl??void 0:u.email&&n?.baseUrl!=null?await this.createEnterpriseAvatarUrl(e,t,n.baseUrl,u.email,n.avatarSize):void 0}}catch(t){if(t instanceof M.Ww)return;throw this.handleException(t,e,a)}}async getDefaultBranch(e,t,r,i,o){let n=(0,O.UH)();try{let a=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		defaultBranchRef {
			name
		}
	}
}`,s=await this.graphql(e,t,a,{...o,owner:r,repo:i},n),l=s?.repository?.defaultBranchRef?.name??void 0;if(null==l)return;return{provider:e,name:l}}catch(t){if(t instanceof M.Ww)return;throw this.handleException(t,e,n)}}async getIssueOrPullRequest(e,t,r,i,o,n){let a=(0,O.UH)();try{let s=`query getIssueOrPullRequest(
	$owner: String!
	$repo: String!
	$number: Int!
) {
	repository(name: $repo, owner: $owner) {
		issueOrPullRequest(number: $number) {
			__typename
			... on Issue {
				createdAt
				closed
				closedAt
				id
				title
				url
				state
			}
			... on PullRequest {
				createdAt
				closed
				closedAt
				id
				title
				url
				state
			}
		}
	}
}`,l=await this.graphql(e,t,s,{...n,owner:r,repo:i,number:o},a),u=l?.repository?.issueOrPullRequest;if(null==u)return;return{provider:e,type:u.type,id:String(o),nodeId:u.id,date:new Date(u.createdAt),title:u.title,closed:u.closed,closedDate:null==u.closedAt?void 0:new Date(u.closedAt),url:u.url,state:(0,Y.fromGitHubPullRequestState)(u.state)}}catch(t){if(t instanceof M.Ww)return;throw this.handleException(t,e,a)}}async getPullRequestForBranch(e,t,r,i,o,n){let a=(0,O.UH)();try{let s=`query getPullRequestForBranch(
	$owner: String!
	$repo: String!
	$branch: String!
	$limit: Int!
	$include: [PullRequestState!]
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		ref(qualifiedName: $branch) {
			associatedPullRequests(first: $limit, orderBy: {field: UPDATED_AT, direction: DESC}, states: $include) {
				nodes {
					author {
						login
						avatarUrl(size: $avatarSize)
						url
					}
					permalink
					number
					title
					state
					updatedAt
					closedAt
					mergedAt
					repository {
						isFork
						owner {
							login
						}
					}
				}
			}
		}
	}
}`,l=await this.graphql(e,t,s,{...n,owner:r,repo:i,branch:`refs/heads/${o}`,limit:10},a),u=l?.repository?.ref?.associatedPullRequests?.nodes?.filter(e=>null!=e&&(!e.repository.isFork||e.repository.owner.login===r));if(null==u||0===u.length)return;return u.length>1&&u.sort((e,t)=>(e.repository.owner.login===r?-1:1)-(t.repository.owner.login===r?-1:1)||("OPEN"===e.state?-1:1)-("OPEN"===t.state?-1:1)||new Date(t.updatedAt).getTime()-new Date(e.updatedAt).getTime()),(0,Y.fromGitHubPullRequest)(u[0],e)}catch(t){if(t instanceof M.Ww)return;throw this.handleException(t,e,a)}}async getPullRequestForCommit(e,t,r,i,o,n,a){let s=(0,O.UH)();try{let l=`query getPullRequestForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				associatedPullRequests(first: 2, orderBy: {field: UPDATED_AT, direction: DESC}) {
					nodes {
						author {
							login
							avatarUrl(size: $avatarSize)
							url
						}
						permalink
						number
						title
						state
						updatedAt
						closedAt
						mergedAt
						repository {
							isFork
							owner {
								login
							}
						}
					}
				}
			}
		}
	}
}`,u=await this.graphql(e,t,l,{...n,owner:r,repo:i,ref:o},s,a),c=u?.repository?.object?.associatedPullRequests?.nodes?.filter(e=>null!=e&&(!e.repository.isFork||e.repository.owner.login===r));if(null==c||0===c.length)return;return c.length>1&&c.sort((e,t)=>(e.repository.owner.login===r?-1:1)-(t.repository.owner.login===r?-1:1)||("MERGED"===e.state?-1:1)-("MERGED"===t.state?-1:1)||new Date(t.updatedAt).getTime()-new Date(e.updatedAt).getTime()),(0,Y.fromGitHubPullRequest)(c[0],e)}catch(t){if(t instanceof M.Ww)return;throw this.handleException(t,e,s)}}async getRepositoryMetadata(e,t,r,i,o,n){let a=(0,O.UH)();try{let s=`query getRepositoryMetadata(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		owner {
			login
		}
		name
		parent {
			owner {
				login
			}
			name
		}
	}
}`,l=await this.graphql(e,t,s,{...o,owner:r,repo:i},a,n),u=l?.repository??void 0;if(null==u)return;return{provider:e,owner:u.owner.login,name:u.name,isFork:null!=u.parent,parent:null!=u.parent?{owner:u.parent.owner.login,name:u.parent.name}:void 0}}catch(t){if(t instanceof M.Ww)return;throw this.handleException(t,e,a)}}async getBlame(e,t,r,i,o){let n=(0,O.UH)();try{let a=`query getBlameRanges(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	viewer { name }
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			...on Commit {
				blame(path: $path) {
					ranges {
						startingLine
						endingLine
						commit {
							oid
							parents(first: 3) { nodes { oid } }
							message
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								date
								email
								name
							}
						}
					}
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,a,{owner:t,repo:r,ref:i,path:o},n);if(null==s)return J;let l=s.repository?.object?.blame?.ranges;if(null==l||0===l.length)return{ranges:[],viewer:s.viewer?.name};return{ranges:l,viewer:s.viewer?.name}}catch(e){if(e instanceof M.Ww)return J;throw this.handleException(e,void 0,n)}}async getBranches(e,t,r,i){let o=(0,O.UH)();try{let n=`query getBranches(
	$owner: String!
	$repo: String!
	$branchQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $branchQuery, refPrefix: "refs/heads/", first: $limit, after: $cursor) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					...on Commit {
						authoredDate
						committedDate
					}
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,n,{owner:t,repo:r,branchQuery:i?.query,cursor:i?.cursor,limit:Math.min(100,i?.limit??100)},o);if(null==a)return Q;let s=a.repository?.refs;if(null==s)return Q;return{paging:{cursor:s.pageInfo.endCursor,more:s.pageInfo.hasNextPage},values:s.nodes}}catch(e){if(e instanceof M.Ww)return Q;throw this.handleException(e,void 0,o)}}async getCommit(e,t,r,i){let o=(0,O.UH)();try{let n=await this.request(void 0,e,"GET /repos/{owner}/{repo}/commits/{ref}",{owner:t,repo:r,ref:i},o),a=n?.data;if(null==a)return;let{commit:s}=a;return{oid:a.sha,parents:{nodes:a.parents.map(e=>({oid:e.sha}))},message:s.message,additions:a.stats?.additions,changedFiles:a.files?.length,deletions:a.stats?.deletions,author:{avatarUrl:a.author?.avatar_url??void 0,date:s.author?.date??new Date().toString(),email:s.author?.email??void 0,name:s.author?.name??""},committer:{date:s.committer?.date??new Date().toString(),email:s.committer?.email??void 0,name:s.committer?.name??""},files:a.files}}catch(e){if(e instanceof M.Ww)return;throw this.handleException(e,void 0,o)}}async getCommitForFile(e,t,r,i,o){if((0,A.D3)(i))return this.getCommit(e,t,r,i);let n=await this.getCommits(e,t,r,i,{limit:1,path:o});if(0!==n.values.length)return{...await this.getCommit(e,t,r,n.values[0].oid)??n.values[0],viewer:n.viewer}}async getCommitBranches(e,t,r,i,o){let n=(0,O.UH)();try{let a=`query getCommitBranches(
	$owner: String!
	$repo: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		refs(first: 20, refPrefix: "refs/heads/") {
			nodes {
				name
				target {
					... on Commit {
						history(first: 3, since: $since until: $until) {
							nodes { oid }
						}
					}
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,a,{owner:t,repo:r,since:o.toISOString(),until:o.toISOString()},n),l=s?.repository?.refs?.nodes;if(null==l)return[];let u=[];for(let e of l)for(let t of e.target.history.nodes)if(t.oid===i){u.push(e.name);break}return u}catch(e){if(e instanceof M.Ww)return[];throw this.handleException(e,void 0,n)}}async getCommitCount(e,t,r,i){let o=(0,O.UH)();try{let n=`query getCommitCount(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: 1) {
						totalCount
					}
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,n,{owner:t,repo:r,ref:i},o);return a?.repository?.ref?.target.history.totalCount}catch(e){if(e instanceof M.Ww)return;throw this.handleException(e,void 0,o)}}async getCommitOnBranch(e,t,r,i,o,n){let a=(0,O.UH)();try{let s=`query getCommitOnBranch(
	$owner: String!
	$repo: String!
	$ref: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: 3, since: $since until: $until) {
						nodes { oid }
					}
				}
			}
		}
	}
}`,l=await this.graphql(void 0,e,s,{owner:t,repo:r,ref:`refs/heads/${i}`,since:n.toISOString(),until:n.toISOString()},a),u=l?.repository?.ref.target.history.nodes;if(null==u)return[];let c=[];for(let e of u)if(e.oid===o){c.push(i);break}return c}catch(e){if(e instanceof M.Ww)return[];throw this.handleException(e,void 0,a)}}async getCommits(e,t,r,i,o){let n=(0,O.UH)();if(o?.limit===1&&o?.path==null)return this.getCommitsCoreSingle(e,t,r,i);try{let a;let s=`query getCommits(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String
	$author: CommitAuthor
	$after: String
	$before: String
	$limit: Int = 100
	$since: GitTimestamp
	$until: GitTimestamp
) {
	viewer { name }
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $limit, author: $author, path: $path, after: $after, before: $before, since: $since, until: $until) {
					pageInfo {
						startCursor
						endCursor
						hasNextPage
						hasPreviousPage
					}
					nodes {
						... on Commit {
							oid
							message
							parents(first: 3) { nodes { oid } }
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								 date
								 email
								 name
							 }
						}
					}
				}
			}
		}
	}
}`;if(o?.authors!=null){if(1===o.authors.length){let[e]=o.authors;a={id:e.id,emails:e.email?[e.email]:void 0}}else{let e=o.authors.filter(e=>e.email).map(e=>e.email);a=e.length?{emails:e}:void 0}}let l=await this.graphql(void 0,e,s,{owner:t,repo:r,ref:i,after:o?.after,before:o?.before,path:o?.path,author:a,limit:Math.min(100,o?.limit??100),since:"string"==typeof o?.since?o?.since:o?.since?.toISOString(),until:"string"==typeof o?.until?o?.until:o?.until?.toISOString()},n),u=l?.repository?.object?.history;if(null==u)return Q;return{paging:null!=u.pageInfo.endCursor?{cursor:u.pageInfo.endCursor??void 0,more:u.pageInfo.hasNextPage}:void 0,values:u.nodes,viewer:l?.viewer.name}}catch(e){if(e instanceof M.Ww)return Q;throw this.handleException(e,void 0,n)}}async getCommitsCoreSingle(e,t,r,i){let o=(0,O.UH)();try{let n=`query getCommit(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	viewer { name }
	repository(name: $repo owner: $owner) {
		object(expression: $ref) {
			...on Commit {
				oid
				parents(first: 3) { nodes { oid } }
				message
				additions
				changedFiles
				deletions
				author {
					avatarUrl
					date
					email
					name
				}
				committer {
					date
					email
					name
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,n,{owner:t,repo:r,ref:i},o);if(null==a)return Q;let s=a.repository?.object;return null!=s?{values:[s],viewer:a.viewer.name}:Q}catch(e){if(e instanceof M.Ww)return Q;throw this.handleException(e,void 0,o)}}async getCommitRefs(e,t,r,i,o){let n=(0,O.UH)();try{let a=`query getCommitRefs(
	$owner: String!
	$repo: String!
	$ref: String!
	$after: String
	$before: String
	$first: Int
	$last: Int
	$path: String
	$since: GitTimestamp
	$until: GitTimestamp
) {
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $first, last: $last, path: $path, since: $since, until: $until, after: $after, before: $before) {
					pageInfo { startCursor, endCursor, hasNextPage, hasPreviousPage }
					totalCount
					nodes { oid }
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,a,{owner:t,repo:r,ref:i,path:o?.path,first:o?.first,last:o?.last,after:o?.after,before:o?.before,since:o?.since,until:o?.until},n),l=s?.repository?.object?.history;if(null==l)return;return{pageInfo:l.pageInfo,totalCount:l.totalCount,values:l.nodes}}catch(e){if(e instanceof M.Ww)return;throw this.handleException(e,void 0,n)}}async getCommitTags(e,t,r,i,o){let n=(0,O.UH)();try{let a=`query getCommitTags(
	$owner: String!
	$repo: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		refs(first: 20, refPrefix: "refs/tags/") {
			nodes {
				name
				target {
					... on Commit {
						history(first: 3, since: $since until: $until) {
							nodes { oid }
						}
					}
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,a,{owner:t,repo:r,since:o.toISOString(),until:o.toISOString()},n),l=s?.repository?.refs?.nodes;if(null==l)return[];let u=[];for(let e of l)for(let t of e.target.history.nodes)if(t.oid===i){u.push(e.name);break}return u}catch(e){if(e instanceof M.Ww)return[];throw this.handleException(e,void 0,n)}}async getNextCommitRefs(e,t,r,i,o,n){let a;let s=await this.getCommitDate(e,t,r,n);if(null==s)return[];let l=await this.getCommitRefs(e,t,r,i,{path:o,first:1,since:s});if(null==l)return[];let u=`${l.pageInfo.startCursor.split(" ",1)[0]} ${l.totalCount}`;if([,a]=u.split(" ",2),a=Math.min(parseInt(a,10),5),null==(l=await this.getCommitRefs(e,t,r,i,{path:o,last:a,before:u})))return[];let c=[];for(let{oid:e}of l.values){if(e===n)break;c.push(e)}return c.reverse()}async getCommitDate(e,t,r,i){let o=(0,O.UH)();try{let n=`query getCommitDate(
	$owner: String!
	$repo: String!
	$sha: GitObjectID!
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $sha) {
			... on Commit { committer { date } }
		}
	}
}`,a=await this.graphql(void 0,e,n,{owner:t,repo:r,sha:i},o);return a?.repository?.object?.committer.date}catch(e){if(e instanceof M.Ww)return;throw this.handleException(e,void 0,o)}}async getContributors(e,t,r){let i=(0,O.UH)();try{let o=await this.request(void 0,e,"GET /repos/{owner}/{repo}/contributors",{owner:t,repo:r,per_page:100},i),n=o?.data;if(null==n)return[];return o.data}catch(e){if(e instanceof M.Ww)return[];throw this.handleException(e,void 0,i)}}async getDefaultBranchName(e,t,r){let i=(0,O.UH)();try{let o=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		defaultBranchRef {
			name
		}
	}
}`,n=await this.graphql(void 0,e,o,{owner:t,repo:r},i);if(null==n)return;return n.repository?.defaultBranchRef?.name??void 0}catch(e){if(e instanceof M.Ww)return;throw this.handleException(e,void 0,i)}}async getCurrentUser(e,t,r){let i=(0,O.UH)();try{let o=`query getCurrentUser(
	$owner: String!
	$repo: String!
) {
	viewer { name, email, login, id }
	repository(owner: $owner, name: $repo) { viewerPermission }
}`,n=await this.graphql(void 0,e,o,{owner:t,repo:r},i);if(null==n)return;return{name:n.viewer?.name,email:n.viewer?.email,username:n.viewer?.login,id:n.viewer?.id}}catch(e){if(e instanceof M.Ww)return;throw this.handleException(e,void 0,i)}}async getRepositoryVisibility(e,t,r){let i=(0,O.UH)();try{let o=`query getRepositoryVisibility(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		visibility
	}
}`,n=await this.graphql(void 0,e,o,{owner:t,repo:r},i);if(n?.repository?.visibility==null)return;return"PUBLIC"===n.repository.visibility?"public":"private"}catch(e){if(e instanceof M.Ww)return;throw this.handleException(e,void 0,i)}}async getTags(e,t,r,i){let o=(0,O.UH)();try{let n=`query getTags(
	$owner: String!
	$repo: String!
	$tagQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $tagQuery, refPrefix: "refs/tags/", first: $limit, after: $cursor, orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					...on Tag {
						message
						tagger { date }
						target {
					...on Commit {
								oid
						authoredDate
						committedDate
						message
					}
						}
					}
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,n,{owner:t,repo:r,tagQuery:i?.query,cursor:i?.cursor,limit:Math.min(100,i?.limit??100)},o);if(null==a)return Q;let s=a.repository?.refs;if(null==s)return Q;return{paging:{cursor:s.pageInfo.endCursor,more:s.pageInfo.hasNextPage},values:s.nodes}}catch(e){if(e instanceof M.Ww)return Q;throw this.handleException(e,void 0,o)}}async resolveReference(e,t,r,i,o){let n=(0,O.UH)();try{if(!o){let o=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			oid
		}
	}
}`,a=await this.graphql(void 0,e,o,{owner:t,repo:r,ref:i},n);return a?.repository?.object?.oid??void 0}let a=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			... on Commit {
				history(first: 1, path: $path) {
					nodes { oid }
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,a,{owner:t,repo:r,ref:i,path:o},n);return s?.repository?.object?.history.nodes?.[0]?.oid??void 0}catch(e){if(e instanceof M.Ww)return;throw this.handleException(e,void 0,n)}}async searchCommits(e,t,r){let i,o,n;let a=(0,O.UH)(),s=Math.min(100,r?.limit??100);r?.cursor!=null?([i,o,n]=r.cursor.split(" ",3),i=parseInt(i,10),o=parseInt(o,10),n=parseInt(n,10)):(i=1,o=s,n=0);try{let s=await this.request(void 0,e,"GET /search/commits",{q:t,sort:r?.sort,order:r?.order,per_page:o,page:i},a),l=s?.data;if(null==l||0===l.items.length)return;let u=l.items.map(e=>({oid:e.sha,parents:{nodes:e.parents.map(e=>({oid:e.sha}))},message:e.commit.message,author:{avatarUrl:e.author?.avatar_url??void 0,date:e.commit.author?.date??e.commit.author?.date??new Date().toString(),email:e.author?.email??e.commit.author?.email??void 0,name:e.author?.name??e.commit.author?.name??""},committer:{date:e.commit.committer?.date??e.committer?.date??new Date().toString(),email:e.committer?.email??e.commit.committer?.email??void 0,name:e.committer?.name??e.commit.committer?.name??""}})),c=n+l.items.length,h=l.incomplete_results||l.total_count>c;return{pageInfo:{startCursor:`${i} ${o} ${n}`,endCursor:h?`${i+1} ${o} ${c}`:void 0,hasPreviousPage:l.total_count>0&&i>1,hasNextPage:h},totalCount:l.total_count,values:u}}catch(e){if(e instanceof M.Ww)return;throw this.handleException(e,void 0,a)}}async searchCommitShas(e,t,r){let i,o,n;let a=(0,O.UH)(),s=Math.min(100,r?.limit??100);r?.cursor!=null?([i,o,n]=r.cursor.split(" ",3),i=parseInt(i,10),o=parseInt(o,10),n=parseInt(n,10)):(i=1,o=s,n=0);try{let s=await this.request(void 0,e,"GET /search/commits",{q:t,sort:r?.sort,order:r?.order,per_page:o,page:i},a),l=s?.data;if(null==l||0===l.items.length)return;let u=n+l.items.length,c=l.incomplete_results||l.total_count>u;return{pageInfo:{startCursor:`${i} ${o} ${n}`,endCursor:c?`${i+1} ${o} ${u}`:void 0,hasPreviousPage:l.total_count>0&&i>1,hasNextPage:c},totalCount:l.total_count,values:l.items.map(e=>({sha:e.sha,authorDate:new Date(e.commit.author.date).getTime(),committerDate:new Date(e.commit.committer?.date??e.commit.author.date).getTime()}))}}catch(e){if(e instanceof M.Ww)return;throw this.handleException(e,void 0,a)}}_enterpriseVersions=new Map;async getEnterpriseVersion(e,t,r){let i=this._enterpriseVersions.get(t);if(null!=i)return i;if(null===i)return;let o=(0,O.UH)();try{let n=await this.request(e,t,"GET /meta",r,o),a=n?.data?.installed_version;i=a?(0,L.mL)(a):null}catch(e){i=null}return this._enterpriseVersions.set(t,i),i??void 0}async graphql(e,t,r,i,o,n){try{let o;if(null!=n){if(n.isCancellationRequested)throw new M.FU;o=new AbortController,n.onCancellationRequested(()=>o.abort()),i={...i,request:{...i?.request,signal:o.signal}}}return await (0,F.a_)(e?.getIgnoreSSLErrors()??!1,()=>this.getDefaults(t,D)(r,i))}catch(r){if(r instanceof P){switch(r.errors?.[0]?.type){case"NOT_FOUND":throw new M.Ww(r);case"FORBIDDEN":throw new M._7("github",M.Jx.Forbidden,r);case"RATE_LIMITED":{let e;let i=r.headers?.["x-ratelimit-reset"];throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new M.yx(r,t,e)}}B.Yd.isDebugging&&q.window.showErrorMessage(`GitHub request failed: ${r.errors?.[0]?.message??r.message}`)}else r instanceof RequestError||"AbortError"===r.name?this.handleRequestError(e,t,r,o):B.Yd.isDebugging&&q.window.showErrorMessage(`GitHub request failed: ${r.message}`);throw r}}async request(e,t,r,i,o,n){try{let o;if(null!=n){if(n.isCancellationRequested)throw new M.FU;o=new AbortController,n.onCancellationRequested(()=>o.abort()),i={...i,request:{...i?.request,signal:o.signal}}}return await (0,F.a_)(e?.getIgnoreSSLErrors()??!1,()=>this.getDefaults(t,G)(r,i))}catch(r){throw r instanceof RequestError||"AbortError"===r.name?this.handleRequestError(e,t,r,o):B.Yd.isDebugging&&q.window.showErrorMessage(`GitHub request failed: ${r.message}`),r}}_defaults=new Map;getDefaults(e,t){let r=this._defaults.get(t);null==r&&(r=new Map,this._defaults.set(t,r));let i=r.get(e);return null==i&&(i=t.defaults({headers:{authorization:`token ${e}`},request:{agent:this.proxyAgent,fetch:E.$L?(e,t)=>{if(null!=t.headers){let{"user-agent":e,...r}=t.headers;e&&(t.headers=r)}return(0,F.he)(e,t)}:F.he,hook:"debug"===B.Yd.logLevel||B.Yd.isDebugging?async(e,t)=>{let r=(0,j.k)(`[GITHUB] ${t.method} ${t.url}`,{log:!1});try{return await e(t)}finally{let e;try{if("string"==typeof t.query){let r=/(^[^({\n]+)/.exec(t.query);e=` ${r?.[1].trim()??t.query}`}}catch{}r?.stop({message:e})}}:void 0}}),r.set(e,i)),i}handleRequestError(e,t,r,i){if("AbortError"===r.name)throw new M.FU(r);switch(r.status){case 404:case 410:case 422:throw new M.Ww(r);case 401:throw new M._7("github",M.Jx.Unauthorized,r);case 403:if(r.message.includes("rate limit")){let e;let i=r.response?.headers?.["x-ratelimit-reset"];throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new M.yx(r,t,e)}throw new M._7("github",M.Jx.Forbidden,r);case 500:B.Yd.error(r,i),null!=r.response&&(e?.trackRequestException(),(0,k.vF)(`${e?.name??"GitHub"} failed to respond and might be experiencing issues.${null==e||"github"===e.id?" Please visit the [GitHub status page](https://githubstatus.com) for more information.":""}`));return;case 502:if(B.Yd.error(r,i),r.message.includes("timeout")){e?.trackRequestException(),(0,k.s$)(e?.name??"GitHub");return}break;default:if(r.status>=400&&r.status<500)throw new M.Bn(r)}B.Yd.error(r,i),B.Yd.isDebugging&&q.window.showErrorMessage(`GitHub request failed: ${r.response?.errors?.[0]?.message??r.message}`)}handleException(e,t,r){return B.Yd.error(e,r),e instanceof M._7&&this.showAuthenticationErrorMessage(e,t),e}async showAuthenticationErrorMessage(e,t){if(e.reason===M.Jx.Unauthorized||e.reason===M.Jx.Forbidden){let r="Reauthenticate";await q.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===M.Jx.Forbidden?" to provide additional access":""}?`,r)===r&&(await t?.reauthenticate(),this.resetCaches(),this._onDidReauthenticate.fire())}else q.window.showErrorMessage(e.message)}async createEnterpriseAvatarUrl(e,t,r,i,o){o=o??16;let n=await this.getEnterpriseVersion(e,t,{baseUrl:r});if((0,L.L5)(n,">= 3.0.0")){let n;let a=(0,x.a)(i);null!=a&&q.Uri.parse(r).authority===a.authority&&(null!=a.userId?n=`${r}/enterprise/avatars/u/${encodeURIComponent(a.userId)}?s=${o}`:null!=a.login&&(n=`${r}/enterprise/avatars/${encodeURIComponent(a.login)}?s=${o}`)),null==n&&(n=`${r}/enterprise/avatars/u/e?email=${encodeURIComponent(i)}&s=${o}`);let s=await (0,F.a_)(e?.getIgnoreSSLErrors()??!1,()=>(0,F.he)(n,{method:"GET",headers:{Authorization:`Bearer ${t}`}}));if(s.ok){let e=(0,N.US)(new Uint8Array(await s.arrayBuffer())),t=s.headers.get("content-type");return`data:${t};base64,${e}`}}return`https://avatars.githubusercontent.com/u/e?email=${encodeURIComponent(i)}&s=${o}`}async searchMyPullRequests(e,t,r){let i=(0,O.UH)();try{let o=function(t,r){return{pullRequest:(0,Y.fromGitHubPullRequestDetailed)(t,e),reasons:r?[r]:[]}},n=`query searchPullRequests(
	$authored: String!
	$assigned: String!
	$reviewRequested: String!
	$mentioned: String!
) {
	authored: search(first: 100, query: $authored, type: ISSUE) {
		nodes {
			...on PullRequest {
				${X}
			}
		}
	}
	assigned: search(first: 100, query: $assigned, type: ISSUE) {
		nodes {
			...on PullRequest {
				${X}
			}
		}
	}
	reviewRequested: search(first: 100, query: $reviewRequested, type: ISSUE) {
		nodes {
			...on PullRequest {
				${X}
			}
		}
	}
	mentioned: search(first: 100, query: $mentioned, type: ISSUE) {
		nodes {
			...on PullRequest {
				${X}
			}
		}
	}
}`,a=r?.search?.trim()??"";if(r?.user&&(a+=` user:${r.user}`),r?.repos!=null&&r.repos.length>0){let e="  repo:";a+=`${e}${r.repos.join(e)}`}let s="is:pr is:open archived:false",l=await this.graphql(e,t,n,{authored:`${a} ${s} author:@me`.trim(),assigned:`${a} ${s} assignee:@me`.trim(),reviewRequested:`${a} ${s} review-requested:@me`.trim(),mentioned:`${a} ${s} mentions:@me`.trim(),baseUrl:r?.baseUrl},i);if(void 0===l)return[];return ee([...l.assigned.nodes.map(e=>o(e,"assigned")),...l.reviewRequested.nodes.map(e=>o(e,"review-requested")),...l.mentioned.nodes.map(e=>o(e,"mentioned")),...l.authored.nodes.map(e=>o(e,"authored"))],e=>e.pullRequest.url)}catch(t){throw this.handleException(t,e,i)}}async searchMyIssues(e,t,r){let i=(0,O.UH)(),o=`query searchIssues(
				$authored: String!
				$assigned: String!
				$mentioned: String!
			) {
				authored: search(first: 100, query: $authored, type: ISSUE) {
					nodes {
						${K}
					}
				}
				assigned: search(first: 100, query: $assigned, type: ISSUE) {
					nodes {
						${K}
					}
				}
				mentioned: search(first: 100, query: $mentioned, type: ISSUE) {
					nodes {
						${K}
					}
				}
			}`,n=r?.search?.trim()??"";if(r?.user&&(n+=` user:${r.user}`),r?.repos!=null&&r.repos.length>0){let e="  repo:";n+=`${e}${r.repos.join(e)}`}let a="type:issue is:open archived:false";try{let s=function(t,r){return{issue:(0,Y.fromGitHubIssueDetailed)(t,e),reasons:r?[r]:[]}},l=await this.graphql(e,t,o,{authored:`${n} ${a} author:@me`.trim(),assigned:`${n} ${a} assignee:@me`.trim(),mentioned:`${n} ${a} mentions:@me`.trim(),baseUrl:r?.baseUrl},i);if(void 0===l)return[];return ee([...l.assigned.nodes.map(e=>s(e,"assigned")),...l.mentioned.nodes.map(e=>s(e,"mentioned")),...l.authored.nodes.map(e=>s(e,"authored"))],e=>e.issue.url)}catch(t){throw this.handleException(t,e,i)}}};function Z(e){return e?.baseUrl==null||"https://api.github.com"===e.baseUrl}function ee(e,t){return(0,T.uw)(e,t,(e,t)=>(0!==t.reasons.length&&e.reasons.push(...t.reasons),e))}z([(0,I.fF)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getAccountForCommit",1),z([(0,I.fF)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getAccountForEmail",1),z([(0,I.fF)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getDefaultBranch",1),z([(0,I.fF)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getIssueOrPullRequest",1),z([(0,I.fF)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getPullRequestForBranch",1),z([(0,I.fF)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getPullRequestForCommit",1),z([(0,I.fF)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getRepositoryMetadata",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getBlame",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getBranches",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommit",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitForFile",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitBranches",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitCount",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitOnBranch",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommits",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitRefs",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitTags",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getNextCommitRefs",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getContributors",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getDefaultBranchName",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getCurrentUser",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getRepositoryVisibility",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"getTags",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"resolveReference",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"searchCommits",1),z([(0,I.fF)({args:{0:"<token>"}})],GitHubApi.prototype,"searchCommitShas",1),z([(0,I.fF)({args:{0:e=>e?.name,1:"<token>"}})],GitHubApi.prototype,"getEnterpriseVersion",1),z([(0,I.fF)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"searchMyPullRequests",1),z([(0,I.fF)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"searchMyIssues",1)},997:(e,t,r)=>{r.r(t),r.d(t,{GitHubGitProvider:()=>GitHubGitProvider});var i,o,n=r(9496),a=r(6150),s=r(5255),l=r(3148),u=r(4575),c=r(8887),h=r(6592),d=r(7462),m=r(5367),p=r(6450),g=r(439),f=r(1719),y=r(7881),w=r(4321),v=r(3050),b=r(3646),C=r(827),$=r(9502),R=r(3961),G=r(2500),P=r(6934),S=r(5148),H=r(2061),U=r(5432),D=r(4241),q=r(3105),F=r(4336),E=r(6004),M=r(3700),A=r(7469),x=r(9701),k=r(6700);async function T(e){try{let e=n.extensions.getExtension("ms-vscode.remote-repositories")??n.extensions.getExtension("GitHub.remotehub");if(null==e)throw F.Yd.log("GitHub Repositories extension is not installed or enabled"),new u.R5("GitHub Repositories","GitHub.remotehub");return e.isActive?e.exports:await e.activate()}catch(t){if(F.Yd.error(t,"Unable to get required api from the GitHub Repositories extension"),u.R5,e)return;throw t}}var _=((i=_||{})[i.Branch=0]="Branch",i[i.RemoteBranch=1]="RemoteBranch",i[i.Tag=2]="Tag",i[i.Commit=3]="Commit",i),I=((o=I||{})[o.Branch=0]="Branch",o[o.Tag=1]="Tag",o[o.Commit=2]="Commit",o[o.PullRequest=3]="PullRequest",o[o.Tree=4]="Tree",o),B=r(998),O=Object.defineProperty,j=Object.getOwnPropertyDescriptor,N=(e,t,r,i)=>{for(var o,n=i>1?void 0:i?j(t,r):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&O(t,r,n),n};let L=/"/g,Y=Object.freeze([]),V=Object.freeze({values:[]}),W=Promise.resolve(void 0),z=["repo","read:user","user:email"],Q=/^[^/](?!.*\/\.)(?!.*\.\.)(?!.*\/\/)(?!.*@\{)[^\000-\037\177 ~^:?*[\\]+[^./]$/;let GitHubGitProvider=class GitHubGitProvider{constructor(e){this.container=e,this._disposables.push(this.container.events.on("git:cache:reset",e=>e.data.repoPath?this.resetCache(e.data.repoPath,...e.data.caches??Y):this.resetCaches(...e.data.caches??Y),n.authentication.onDidChangeSessions(this.onAuthenticationSessionsChanged,this)))}descriptor={id:"github",name:"GitHub",virtual:!0};supportedSchemes=new Set([s.sN.Virtual,s.sN.GitHub,s.sN.PRs]);_onDidChange=new n.EventEmitter;get onDidChange(){return this._onDidChange.event}_onDidChangeRepository=new n.EventEmitter;get onDidChangeRepository(){return this._onDidChangeRepository.event}_onDidCloseRepository=new n.EventEmitter;get onDidCloseRepository(){return this._onDidCloseRepository.event}_onDidOpenRepository=new n.EventEmitter;get onDidOpenRepository(){return this._onDidOpenRepository.event}_branchesCache=new Map;_repoInfoCache=new Map;_tagsCache=new Map;_disposables=[];dispose(){this._disposables.forEach(e=>void e.dispose())}onAuthenticationSessionsChanged(e){"github"===e.provider.id&&(this._sessionPromise=void 0,this.ensureSession(!1,!0))}onRepositoryChanged(e,t){this._branchesCache.delete(e.path),this._tagsCache.delete(e.path),this._repoInfoCache.delete(e.path),this._onDidChangeRepository.fire(t)}async discoverRepositories(e,t){if(!this.supportedSchemes.has(e.scheme))return[];try{let{remotehub:r}=await this.ensureRepositoryContext(e.toString(),!0),i=r.getVirtualWorkspaceUri(e);if(null==i)return[];return this.openRepository(void 0,i,!0,void 0,t?.silent)}catch(t){return t.message.startsWith("No provider registered with")&&(F.Yd.error(t,"No GitHub provider registered with Remote Repositories (yet); queuing pending discovery"),this._pendingDiscovery.add(e),this.ensurePendingRepositoryDiscovery()),[]}}_pendingDiscovery=new Set;_pendingTimer;ensurePendingRepositoryDiscovery(){null==this._pendingTimer&&0!==this._pendingDiscovery.size&&(this._pendingTimer=setTimeout(async()=>{try{let e=await T();for(let t of this._pendingDiscovery){if(null==e.getProvider(t)){this._pendingTimer=void 0,this.ensurePendingRepositoryDiscovery();return}this._pendingDiscovery.delete(t)}this._pendingTimer=void 0,setTimeout(()=>this._onDidChange.fire(),1),0!==this._pendingDiscovery.size&&this.ensurePendingRepositoryDiscovery()}catch{this._pendingTimer=void 0,this.ensurePendingRepositoryDiscovery()}},250))}updateContext(){(0,H.v)("gitlens:hasVirtualFolders",this.container.git.hasOpenRepositories(this.descriptor.id))}openRepository(e,t,r,i,o){return[new b._j(this.container,this.onRepositoryChanged.bind(this),this.descriptor,e??n.workspace.getWorkspaceFolder(t),t,r,i??!n.window.state.focused,o)]}async supports(e){switch(e){case c.A.Stashes:case c.A.Worktrees:case c.A.StashOnlyStaged:return!1;default:return!0}}async visibility(e){let t=await this.getRemotes(e,{sort:!0});if(0===t.length)return["local",void 0];for await(let e of(0,A.rX)(t.map(e=>this.getRemoteVisibility(e))))if("fulfilled"===e.status&&"public"===e.value[0])return["public",(0,v.Ym)(e.value[1])];return["private",(0,v.Ym)(t)]}async getRemoteVisibility(e){if(e.provider?.id==="github"){let{github:t,metadata:r,session:i}=await this.ensureRepositoryContext(e.repoPath);return[await t.getRepositoryVisibility(i.accessToken,r.repo.owner,r.repo.name)??"private",e]}return["private",e]}async getOpenScmRepositories(){return[]}async getScmRepository(e){}async getOrOpenScmRepository(e){}canHandlePathOrUri(e,t){if(this.supportedSchemes.has(e))return"string"==typeof t?t:t.toString()}getAbsoluteUri(e,t){if("string"==typeof t){if((0,M.tE)(t))t=n.Uri.parse(t,!0);else throw n.window.showErrorMessage(`Unable to get absolute uri between ${"string"==typeof e?e:e.toString(!0)} and ${t}; Base path '${t}' must be a uri`),Error(`Base path '${t}' must be a uri`)}if("string"==typeof e&&!(0,M.tE)(e)){let r=(0,M.AH)(e);if(!(0,M.YP)(r))return n.Uri.joinPath(t,r)}let r=this.getRelativePath(e,t);return n.Uri.joinPath(t,r)}async getBestRevisionUri(e,t,r){return r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t)}getRelativePath(e,t){let r;if("string"==typeof t){if((0,M.tE)(t))t=n.Uri.parse(t,!0);else throw n.window.showErrorMessage(`Unable to get relative path between ${"string"==typeof e?e:e.toString(!0)} and ${t}; Base path '${t}' must be a uri`),Error(`Base path '${t}' must be a uri`)}if("string"==typeof e){if(!(0,M.tE)(e))return e=(0,M.AH)(e),(r=(0,M.YP)(e)&&e.startsWith(t.path)?e.slice(t.path.length):e).charCodeAt(0)===s.mN.Slash&&(r=r.slice(1)),r;e=n.Uri.parse(e,!0)}return(0,M.AH)((0,M.Gf)(t.path.slice(1),e.path.slice(1)))}getRevisionUri(e,t,r){let i=this.createProviderUri(e,r,t);return r===g.Ii?i.with({query:"~"}):i}async getWorkingUri(e,t){return this.createVirtualUri(e,void 0,t.path)}async addRemote(e,t,r,i){}async pruneRemote(e,t){}async removeRemote(e,t){}async applyChangesToWorkingFile(e,t,r){}async branchContainsCommit(e,t,r){return!1}async checkout(e,t,r){}resetCache(e,...t){(0===t.length||t.includes("branches"))&&this._branchesCache.delete(e),(0===t.length||t.includes("tags"))&&this._tagsCache.delete(e),0===t.length&&this._repoInfoCache.delete(e)}resetCaches(...e){(0===e.length||e.includes("branches"))&&this._branchesCache.clear(),(0===e.length||e.includes("tags"))&&this._tagsCache.clear(),0===e.length&&this._repoInfoCache.clear()}async excludeIgnoredUris(e,t){return t}async fetch(e,t){}async pull(e,t){}async push(e,t){}async findRepositoryUri(e,t){let r=(0,E.UH)();try{return(await this.ensureRemoteHubApi()).getProviderRootUri(e).with({scheme:s.sN.Virtual})}catch(e){u.R5,F.Yd.error(e,r);return}}async getAheadBehindCommitCount(e,t,r){}async getBlame(e,t){let r=(0,E.UH)();if(t?.isDirty)return;let i="blame";null!=e.sha&&(i+=`:${e.sha}`);let o=await this.container.tracker.getOrAdd(e);if(null!=o.state){let e=o.state.getBlame(i);if(null!=e)return F.Yd.debug(r,`Cache hit: '${i}'`),e.item}F.Yd.debug(r,`Cache miss: '${i}'`),null==o.state&&(o.state=new k.p);let n=this.getBlameCore(e,o,i,r);return null!=o.state&&(F.Yd.debug(r,`Cache add: '${i}'`),o.state.setBlame(i,{item:n})),n}async getBlameCore(e,t,r,i){try{let t=await this.ensureRepositoryContext(e.repoPath);if(null==t)return;let{metadata:r,github:i,remotehub:o,session:a}=t,l=o.getVirtualUri(o.getProviderRootUri(e)),u=this.getRelativePath(e,l);if(e.scheme===s.sN.Virtual){let[t,r]=await Promise.allSettled([n.workspace.fs.stat(e),n.workspace.fs.stat(e.with({scheme:s.sN.GitHub}))]);if("fulfilled"!==t.status||"fulfilled"!==r.status||t.value.mtime!==r.value.mtime)return}let c=e.sha&&"HEAD"!==e.sha?e.sha:(await r.getRevision()).revision,h=await i.getBlame(a.accessToken,r.repo.owner,r.repo.name,c,u),d=new Map,m=new Map,g=[];for(let t of h.ranges){let r=t.commit,{viewer:i=a.account.label}=h,o=null!=i&&r.author.name===i?"You":r.author.name,n=null!=i&&r.committer.name===i?"You":r.committer.name,s=d.get(o);null==s&&(s={name:o,lineCount:0},d.set(o,s)),s.lineCount+=t.endingLine-t.startingLine+1;let c=m.get(r.oid);null==c&&(c=new p.aM(this.container,e.repoPath,r.oid,new p._j(o,r.author.email,new Date(r.author.date),r.author.avatarUrl),new p._j(n,r.committer.email,new Date(r.author.date)),r.message.split("\n",1)[0],r.parents.nodes[0]?.oid?[r.parents.nodes[0]?.oid]:[],r.message,new y.K8(l.toString(),u,y.NV.Modified),{changedFiles:r.changedFiles??0,additions:r.additions??0,deletions:r.deletions??0},[]),m.set(r.oid,c));for(let e=t.startingLine;e<=t.endingLine;e++){let t={sha:r.oid,originalLine:e,line:e};c.lines.push(t),g[e-1]=t}}let f=new Map([...d.entries()].sort((e,t)=>t[1].lineCount-e[1].lineCount));return{repoPath:e.repoPath,authors:f,commits:m,lines:g}}catch(e){if(null!=t.state&&!String(e).includes("No provider registered with")){let o=e?.toString()??"";return F.Yd.debug(i,`Cache replace (with empty promise): '${r}'`),t.state.setBlame(r,{item:W,errorMessage:o}),t.setBlameFailure(e),W}return}}async getBlameContents(e,t){}async getBlameForLine(e,t,r,i){let o=(0,E.UH)();if(!r?.isDirty){if(!i?.forceSingleLine){let r=await this.getBlame(e);if(null==r)return;let i=r.lines[t];if(null==i){if(r.lines.length!==t)return;i=r.lines[t-1]}let o=r.commits.get(i.sha);if(null==o)return;return{author:{...r.authors.get(o.author.name),lineCount:o.lines.length},commit:o,line:i}}try{let r=await this.ensureRepositoryContext(e.repoPath);if(null==r)return;let{metadata:i,github:o,remotehub:n,session:a}=r,s=n.getVirtualUri(n.getProviderRootUri(e)),l=this.getRelativePath(e,s),u=e.sha&&"HEAD"!==e.sha?e.sha:(await i.getRevision()).revision,c=await o.getBlame(a.accessToken,i.repo.owner,i.repo.name,u,l),h=t+1,d=c.ranges.find(e=>e.startingLine===h);if(null==d)return;let m=d.commit,{viewer:g=a.account.label}=c,f=null!=g&&m.author.name===g?"You":m.author.name,w=null!=g&&m.committer.name===g?"You":m.committer.name,v=new p.aM(this.container,e.repoPath,m.oid,new p._j(f,m.author.email,new Date(m.author.date),m.author.avatarUrl),new p._j(w,m.committer.email,new Date(m.author.date)),m.message.split("\n",1)[0],m.parents.nodes[0]?.oid?[m.parents.nodes[0]?.oid]:[],m.message,new y.K8(s.toString(),l,y.NV.Modified),{changedFiles:m.changedFiles??0,additions:m.additions??0,deletions:m.deletions??0},[]);for(let e=d.startingLine;e<=d.endingLine;e++){let t={sha:m.oid,originalLine:e,line:e};v.lines.push(t)}return{author:{name:f,lineCount:d.endingLine-d.startingLine+1},commit:v,line:{sha:m.oid,originalLine:d.startingLine,line:d.startingLine}}}catch(e){F.Yd.error(o,e);return}}}async getBlameForLineContents(e,t,r,i){}async getBlameForRange(e,t){let r=await this.getBlame(e);if(null!=r)return this.getBlameRange(r,e,t)}async getBlameForRangeContents(e,t,r){let i=await this.getBlameContents(e,r);if(null!=i)return this.getBlameRange(i,e,t)}getBlameRange(e,t,r){if(0===e.lines.length||0===r.start.line&&r.end.line===e.lines.length-1)return{allLines:e.lines,...e};let i=e.lines.slice(r.start.line,r.end.line+1),o=new Set(i.map(e=>e.sha)),n=r.start.line+1,a=r.end.line+1,s=new Map,l=new Map;for(let t of e.commits.values()){if(!o.has(t.sha))continue;let e=t.with({lines:t.lines.filter(e=>e.line>=n&&e.line<=a)});l.set(t.sha,e);let r=s.get(e.author.name);null==r&&(r={name:e.author.name,lineCount:0},s.set(r.name,r)),r.lineCount+=e.lines.length}let u=new Map([...s.entries()].sort((e,t)=>t[1].lineCount-e[1].lineCount));return{repoPath:t.repoPath,authors:u,commits:l,lines:i,allLines:e.lines}}async getBranch(e){let{values:[t]}=await this.getBranches(e,{filter:e=>e.current});return t}async getBranches(e,t){if(null==e)return V;let r=(0,E.UH)(),i=t?.cursor?void 0:this._branchesCache.get(e);null==i&&(i=(async function(){try{let{metadata:r,github:i,session:o}=await this.ensureRepositoryContext(e),n=await r.getRevision(),a=0===n.type?n.name:void 0,s=[],l=t?.cursor,u=null==l;for(;;){let t=await i.getBranches(o.accessToken,r.repo.owner,r.repo.name,{cursor:l});for(let r of t.values){let t=new Date("author-date"===S.D.get("advanced.commitOrdering")?r.target.authoredDate:r.target.committedDate),i=r.target.oid;s.push(new m.XI(this.container,e,r.name,!1,r.name===a,t,i,{name:`origin/${r.name}`,missing:!1}),new m.XI(this.container,e,`origin/${r.name}`,!0,!1,t,i))}if(!t.paging?.more||!u)return{...t,values:s};l=t.paging.cursor}}catch(t){return F.Yd.error(t,r),this._branchesCache.delete(e),V}}).call(this),t?.cursor==null&&this._branchesCache.set(e,i));let o=await i;return t?.filter!=null&&(o={...o,values:o.values.filter(t.filter)}),t?.sort!=null&&(0,m.YF)(o.values,"boolean"==typeof t.sort?void 0:t.sort),o}async getChangedFilesCount(e,t){if(!t)return;let r=await this.getCommit(e,t);if(r?.stats==null)return;let{stats:i}=r,o=(0,p.By)(i.changedFiles);return{additions:i.additions,deletions:i.deletions,changedFiles:o}}async getCommit(e,t){if(null==e)return;let r=(0,E.UH)();try{let{metadata:r,github:i,session:o}=await this.ensureRepositoryContext(e),n=await i.getCommit(o.accessToken,r.repo.owner,r.repo.name,t);if(null==n)return;let{viewer:a=o.account.label}=n,s=null!=a&&n.author.name===a?"You":n.author.name,l=null!=a&&n.committer.name===a?"You":n.committer.name;return new p.aM(this.container,e,n.oid,new p._j(s,n.author.email,new Date(n.author.date),n.author.avatarUrl),new p._j(l,n.committer.email,new Date(n.committer.date)),n.message.split("\n",1)[0],n.parents.nodes.map(e=>e.oid),n.message,n.files?.map(t=>new y.K8(e,t.filename??"",B.fromCommitFileStatus(t.status)??y.NV.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0}))??[],{changedFiles:n.changedFiles??0,additions:n.additions??0,deletions:n.deletions??0},[])}catch(e){F.Yd.error(e,r);return}}async getCommitBranches(e,t,r,i){if(null==e||i?.commitDate==null)return[];let o=(0,E.UH)();try{let{metadata:o,github:n,session:a}=await this.ensureRepositoryContext(e);return r?await n.getCommitOnBranch(a.accessToken,o.repo.owner,o.repo.name,r,t,i?.commitDate):await n.getCommitBranches(a.accessToken,o.repo.owner,o.repo.name,t,i?.commitDate)}catch(e){return F.Yd.error(e,o),[]}}async getCommitCount(e,t){if(null==e)return;let r=(0,E.UH)();try{let{metadata:r,github:i,session:o}=await this.ensureRepositoryContext(e);return await i.getCommitCount(o?.accessToken,r.repo.owner,r.repo.name,t)}catch(e){F.Yd.error(e,r);return}}async getCommitForFile(e,t,r){if(null==e)return;let i=(0,E.UH)();try{let{metadata:i,github:o,remotehub:n,session:a}=await this.ensureRepositoryContext(e),s=this.getRelativePath(t,n.getProviderRootUri(t)),l=r?.ref&&"HEAD"!==r.ref?r.ref:(await i.getRevision()).revision,u=await o.getCommitForFile(a.accessToken,i.repo.owner,i.repo.name,l,s);if(null==u)return;let{viewer:c=a.account.label}=u,h=null!=c&&u.author.name===c?"You":u.author.name,d=null!=c&&u.committer.name===c?"You":u.committer.name,m=u.files?.map(t=>new y.K8(e,t.filename??"",B.fromCommitFileStatus(t.status)??y.NV.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),g=m?.find(e=>e.path===s);return new p.aM(this.container,e,u.oid,new p._j(h,u.author.email,new Date(u.author.date),u.author.avatarUrl),new p._j(d,u.committer.email,new Date(u.committer.date)),u.message.split("\n",1)[0],u.parents.nodes.map(e=>e.oid),u.message,{file:g,files:m},{changedFiles:u.changedFiles??0,additions:u.additions??0,deletions:u.deletions??0},[])}catch(e){F.Yd.error(e,i);return}}async getCommitsForGraph(e,t,r){let i=r?.limit??S.D.get("graph.defaultItemLimit")??5e3,o=S.D.get("graph.commitOrdering",void 0,"date"),n=S.D.get("graph.avatars",void 0,!0),[a,s,l,u,c,h]=await Promise.allSettled([this.getLog(e,{all:!0,ordering:o,limit:i}),this.getBranch(e),this.getBranches(e,{filter:e=>e.remote}),this.getRemotes(e),this.getTags(e),this.getCurrentUser(e)]),d=new Map,m=(0,A.Sb)(s),p=new Map,g=new Map;null!=m&&(p.set(m.name,m),null!=m.sha&&g.set(m.sha,[m.name]));let f=A.Sb(l)?.values;if(null!=f)for(let e of f){if(p.set(e.name,e),null==e.sha)continue;let t=g.get(e.sha);null==t?g.set(e.sha,[e.name]):t.push(e.name)}let y=new Set,w=(0,A.Sb)(u)[0],v=null!=w?new Map([[w.name,w]]):new Map,b=new Map,C=A.Sb(c)?.values;if(null!=C)for(let e of C){if(null==e.sha)continue;let t=b.get(e.sha);null==t?b.set(e.sha,[e.name]):t.push(e.name)}return this.getCommitsForGraphCore(e,t,(0,A.Sb)(a),m,p,g,w,v,b,(0,A.Sb)(h),d,y,{...r,useAvatars:n})}async getCommitsForGraphCore(e,t,r,i,o,n,a,s,u,c,h,d,g){let f,y,b,C,R,G,P,S,H,U;let D={...g?.include,stats:!0},F=new Map;if(null==r)return{repoPath:e,avatars:h,ids:d,includes:D,branches:o,remotes:s,downstreams:F,rows:[]};let E=(r.pagedCommits?.()??r.commits)?.values();if(null==E)return{repoPath:e,avatars:h,ids:d,includes:D,branches:o,remotes:s,downstreams:F,rows:[]};let M=[],A=!1,k=!1,T=i.upstream?.name;for(let r of E){if(d.add(r.sha),A=r.sha===i.sha){if(b={webviewItem:`gitlens:branch${A?"+current":""}${i?.upstream!=null?"+tracking":""}`,webviewItemValue:{type:"branch",ref:(0,w.xB)(i.name,e,{id:i.id,refType:"branch",name:i.name,remote:!1,upstream:i.upstream})}},R=[{id:i.id,name:i.name,isCurrentHead:!0,context:(0,x.BH)(b),upstream:null!=i.upstream?{name:i.upstream.name,id:(0,m.Vx)(e,!0,i.upstream.name)}:void 0}],null!=i.upstream){if(S=(0,m.Vx)(e,!0,i.name),f=((g?.useAvatars?a.provider?.avatarUri:void 0)??v.dM(this.container,a,t))?.toString(!0),b={webviewItem:"gitlens:branch+remote",webviewItemValue:{type:"branch",ref:(0,w.xB)(i.name,e,{id:S,refType:"branch",name:i.name,remote:!0,upstream:{name:a.name,missing:!1}})}},G=[{id:S,name:i.name,owner:a.name,url:a.url,avatarUrl:f,context:(0,x.BH)(b),current:!0,hostingServiceType:a.provider?.id}],null!=T){let e=F.get(T);null==e&&(e=[],F.set(T,e)),e.push(i.name)}}else G=[]}else{R=[],G=[];let i=n.get(r.sha);if(null!=i)for(let r of i)S=(0,m.Vx)(e,!0,r),y=(0,m.S3)(r),f=((g?.useAvatars?a.provider?.avatarUri:void 0)??v.dM(this.container,a,t))?.toString(!0),b={webviewItem:"gitlens:branch+remote",webviewItemValue:{type:"branch",ref:(0,w.xB)(r,e,{id:S,refType:"branch",name:r,remote:!0,upstream:{name:a.name,missing:!1}})}},G.push({id:S,name:y,owner:a.name,url:a.url,avatarUrl:f,context:(0,x.BH)(b),hostingServiceType:a.provider?.id})}P=[];let o=u.get(r.sha);if(null!=o)for(let t of o)U=(0,$.YU)(e,t),b={webviewItem:"gitlens:tag",webviewItemValue:{type:"tag",ref:(0,w.xB)(t,e,{id:U,refType:"tag",name:t})}},P.push({id:U,name:t,annotated:!0,context:(0,x.BH)(b)});if(r.author.email&&!h.has(r.author.email)){let e=r.getCachedAvatarUri();null!=e&&h.set(r.author.email,e.toString(!0))}k="You"===r.author.name,C={row:(0,x.BH)({webviewItem:`gitlens:commit${A?"+HEAD":""}+current`,webviewItemValue:{type:"commit",ref:(0,w.xB)(r.sha,e,{refType:"revision",message:r.message})}}),avatar:(0,x.BH)({webviewItem:`gitlens:contributor${k?"+current":""}`,webviewItemValue:{type:"contributor",repoPath:e,name:k&&c?.name!=null?c.name:r.author.name,email:r.author.email,current:k}})},M.push({sha:r.sha,parents:r.parents,author:r.author.name,email:r.author.email??"",date:r.committer.date.getTime(),message:(0,l.X)(r.message&&String(r.message).length?r.message:r.summary),type:r.parents.length>1?"merge-node":"commit-node",heads:R,remotes:G,tags:P,contexts:C}),null!=r.stats&&(null==H&&(H=new Map),H.set(r.sha,{files:(0,p.By)(r.stats.changedFiles),additions:r.stats.additions,deletions:r.stats.deletions}))}return g?.ref==="HEAD"?g.ref=q.Ps(r.commits.values())?.sha:g?.ref!=null&&(g.ref=void 0),{repoPath:e,avatars:h,ids:d,includes:D,branches:o,remotes:s,downstreams:F,rows:M,id:g?.ref,paging:{limit:r.limit,startingCursor:r.startingCursor,hasMore:r.hasMore},more:async l=>{let m=await r.more?.(l);return this.getCommitsForGraphCore(e,t,m,i,o,n,a,s,u,c,h,d,g)}}}async getCommitTags(e,t,r){if(null==e||r?.commitDate==null)return[];let i=(0,E.UH)();try{let{metadata:i,github:o,session:n}=await this.ensureRepositoryContext(e);return await o.getCommitTags(n.accessToken,i.repo.owner,i.repo.name,t,r?.commitDate)}catch(e){return F.Yd.error(e,i),[]}}async getContributors(e,t){if(null==e)return[];let r=(0,E.UH)();try{let{metadata:t,github:r,session:i}=await this.ensureRepositoryContext(e),o=await r.getContributors(i.accessToken,t.repo.owner,t.repo.name),n=await this.getCurrentUser(e),a=[];for(let t of o)"User"===t.type&&a.push(new f.V(e,t.name,t.email,t.contributions,void 0,(0,R.o)(n,t.name,t.email,t.login),void 0,t.login,t.avatar_url,t.node_id));return a}catch(e){return F.Yd.error(e,r),[]}}async getCurrentUser(e){if(!e)return;let t=(0,E.UH)(),r=this._repoInfoCache.get(e),i=r?.user;if(null!=i)return i;if(null!==i)try{let{metadata:t,github:o,session:n}=await this.ensureRepositoryContext(e);return i=await o.getCurrentUser(n.accessToken,t.repo.owner,t.repo.name),this._repoInfoCache.set(e,{...r,user:i??null}),i}catch(i){F.Yd.error(i,t),this._repoInfoCache.set(e,{...r,user:null});return}}async getDefaultBranchName(e,t){if(null==e)return;let r=(0,E.UH)();try{let{metadata:t,github:r,session:i}=await this.ensureRepositoryContext(e);return await r.getDefaultBranchName(i.accessToken,t.repo.owner,t.repo.name)}catch(e){F.Yd.error(e,r);return}}async getDiffForFile(e,t,r){}async getDiffForFileContents(e,t,r){}async getDiffForLine(e,t,r,i){}async getDiffStatus(e,t,r,i){}async getFileStatusForCommit(e,t,r){if(r===g.Ii||(0,w.l3)(r))return;let i=await this.getCommitForFile(e,t,{ref:r});if(null!=i)return i.findFile(t)}async getLastFetchedTimestamp(e){}async getLog(e,t){if(null==e)return;let r=(0,E.UH)(),i=this.getPagingLimit(t?.limit);try{let{metadata:r,github:o,session:n}=await this.ensureRepositoryContext(e),a=t?.ref&&"HEAD"!==t.ref?t.ref:(await r.getRevision()).revision,s=await o.getCommits(n.accessToken,r.repo.owner,r.repo.name,a,{all:t?.all,authors:t?.authors,after:t?.cursor,limit:i,since:t?.since?new Date(t.since):void 0}),l=new Map,{viewer:u=n.account.label}=s;for(let t of s.values){let r=null!=u&&t.author.name===u?"You":t.author.name,i=null!=u&&t.committer.name===u?"You":t.committer.name,o=l.get(t.oid);null==o&&(o=new p.aM(this.container,e,t.oid,new p._j(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new p._j(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,t.files?.map(t=>new y.K8(e,t.filename??"",B.fromCommitFileStatus(t.status)??y.NV.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),l.set(t.oid,o))}let c={repoPath:e,commits:l,sha:a,range:void 0,count:l.size,limit:i,hasMore:s.paging?.more??!1,endingCursor:s.paging?.cursor,query:r=>this.getLog(e,{...t,limit:r})};return c.hasMore&&(c.more=this.getLogMoreFn(c,t)),c}catch(e){F.Yd.error(e,r);return}}async getLogRefsOnly(e,t){let r=await this.getLog(e,t);if(null!=r)return new Set([...r.commits.values()].map(e=>e.ref))}getLogMoreFn(e,t){return async r=>{let i=null!=r&&"object"==typeof r?r.until:void 0,o="number"==typeof r?r:void 0;if(i&&(0,q.G)(e.commits.values(),e=>e.ref===i))return e;o=this.getPagingLimit(o);let n=await this.getLog(e.repoPath,{...t,limit:o,cursor:e.endingCursor});if(null==n)return{...e,hasMore:!1,more:void 0};let a=new Map([...e.commits,...n.commits]),s={repoPath:e.repoPath,commits:a,sha:e.sha,range:void 0,count:a.size,limit:null==i?(e.limit??0)+o:void 0,hasMore:null!=i||n.hasMore,startingCursor:q.Z$(e.commits)?.[0],endingCursor:n.endingCursor,pagedCommits:()=>{for(let t of e.commits.keys())n.commits.delete(t);return n.commits},query:e.query};return s.hasMore&&(s.more=this.getLogMoreFn(s,t)),s}}async getLogForFile(e,t,r){if(null==e)return;let i=(0,E.UH)(),o=this.getRelativePath(t,e);if(null!=e&&e===o)throw Error(`File name cannot match the repository path; path=${o}`);(r={reverse:!1,...r}).renames=!1,r.all=!1;let n="log";null!=r.ref&&(n+=`:${r.ref}`),r.limit=this.getPagingLimit(r?.limit),r.limit&&(n+=`:n${r.limit}`),r.renames&&(n+=":follow"),r.reverse&&(n+=":reverse"),r.since&&(n+=`:since=${r.since}`),r.skip&&(n+=`:skip${r.skip}`),r.cursor&&(n+=`:cursor=${r.cursor}`);let a=await this.container.tracker.getOrAdd(d.YY.fromFile(o,e,r.ref));if(!r.force&&null==r.range){if(null!=a.state){let o=a.state.getLog(n);if(null!=o)return F.Yd.debug(i,`Cache hit: '${n}'`),o.item;if(null!=r.ref||null!=r.limit){let o=a.state.getLog(`log${r.renames?":follow":""}${r.reverse?":reverse":""}`);if(null!=o){if(null==r.ref)return F.Yd.debug(i,`Cache hit: ~'${n}'`),o.item;F.Yd.debug(i,`Cache ?: '${n}'`);let a=await o.item;if(null!=a&&!a.hasMore&&a.commits.has(r.ref)){F.Yd.debug(i,`Cache hit: '${n}'`);let o=!0,s=0,l=new Map((0,q.DZ)(a.commits.entries(),([e,t])=>{if(o){if(e!==r?.ref)return;o=!1}if(s++,r?.limit==null||!(s>r.limit))return[e,t]})),u={...r};return{...a,limit:r.limit,count:l.size,commits:l,query:r=>this.getLogForFile(e,t,{...u,limit:r})}}}}}F.Yd.debug(i,`Cache miss: '${n}'`),null==a.state&&(a.state=new k.p)}let s=this.getLogForFileCore(e,o,a,n,i,r);return null!=a.state&&null==r.range&&(F.Yd.debug(i,`Cache add: '${n}'`),a.state.setLog(n,{item:s})),s}async getLogForFileCore(e,t,r,i,o,n){if(null==e)return;let a=this.getPagingLimit(n?.limit);try{let r=await this.ensureRepositoryContext(e);if(null==r)return;let{metadata:i,github:o,remotehub:s,session:l}=r,u=this.getAbsoluteUri(t,e),c=this.getRelativePath(u,s.getProviderRootUri(u)),h=n?.ref&&"HEAD"!==n.ref?n.ref:(await i.getRevision()).revision,d=await o.getCommits(l.accessToken,i.repo.owner,i.repo.name,h,{all:n?.all,after:n?.cursor,path:c,limit:a,since:n?.since?new Date(n.since):void 0}),m=new Map,{viewer:g=l.account.label}=d;for(let t of d.values){let r=null!=g&&t.author.name===g?"You":t.author.name,i=null!=g&&t.committer.name===g?"You":t.committer.name,o=m.get(t.oid);if(null==o){let n=t.files?.map(t=>new y.K8(e,t.filename??"",B.fromCommitFileStatus(t.status)??y.NV.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),a=(0,M.Mh)(c)?void 0:n?.find(e=>e.path===c)??new y.K8(e,c,y.NV.Modified,void 0,void 0,1===t.changedFiles?{additions:t.additions??0,deletions:t.deletions??0,changes:0}:void 0);o=new p.aM(this.container,e,t.oid,new p._j(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new p._j(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,{file:a,files:n},{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),m.set(t.oid,o)}}let f={repoPath:e,commits:m,sha:h,range:void 0,count:m.size,limit:a,hasMore:d.paging?.more??!1,endingCursor:d.paging?.cursor,query:r=>this.getLogForFile(e,t,{...n,limit:r})};return f.hasMore&&(f.more=this.getLogForFileMoreFn(f,t,n)),f}catch(e){if(null!=r.state&&n?.range==null&&!n?.reverse){let t=e?.toString()??"";return F.Yd.debug(o,`Cache replace (with empty promise): '${i}'`),r.state.setLog(i,{item:W,errorMessage:t}),W}return}}getLogForFileMoreFn(e,t,r){return async i=>{let o=null!=i&&"object"==typeof i?i.until:void 0,n="number"==typeof i?i:void 0;if(o&&(0,q.G)(e.commits.values(),e=>e.ref===o))return e;n=this.getPagingLimit(n);let a=await this.getLogForFile(e.repoPath,t,{...r,limit:null==o?n:0,cursor:e.endingCursor});if(null==a)return{...e,hasMore:!1,more:void 0};let s=new Map([...e.commits,...a.commits]),l={repoPath:e.repoPath,commits:s,sha:e.sha,range:e.range,count:s.size,limit:null==o?(e.limit??0)+n:void 0,hasMore:null!=o||a.hasMore,endingCursor:a.endingCursor,query:e.query};return l.hasMore&&(l.more=this.getLogForFileMoreFn(l,t,r)),l}}async getMergeBase(e,t,r,i){}async getMergeStatus(e){}async getRebaseStatus(e){}async getNextComparisonUris(e,t,r,i=0){if(!r)return;let o=(0,E.UH)();try{let o=await this.ensureRepositoryContext(e);if(null==o)return;let{metadata:n,github:a,remotehub:s,session:l}=o,u=this.getRelativePath(t,s.getProviderRootUri(t)),c=(await n.getRevision()).revision;"HEAD"===r&&(r=c);let h=await a.getNextCommitRefs(l.accessToken,n.repo.owner,n.repo.name,c,u,r);return{current:0===i?d.YY.fromFile(u,e,r):new d.YY(await this.getBestRevisionUri(e,u,h[i-1])),next:new d.YY(await this.getBestRevisionUri(e,u,h[i]))}}catch(e){throw F.Yd.error(e,o),e}}async getOldestUnpushedRefForFile(e,t){}async getPreviousComparisonUris(e,t,r,i=0){if(r===g.Ii)return;let o=(0,E.UH)();r===g.CL&&(r=void 0);try{let o=await this.ensureRepositoryContext(e);if(null==o)return;let{metadata:n,github:a,remotehub:s,session:l}=o,u=this.getRelativePath(t,s.getProviderRootUri(t)),c=null!=r?1:0,h=await a.getCommitRefs(l.accessToken,n.repo.owner,n.repo.name,r&&"HEAD"!==r?r:(await n.getRevision()).revision,{path:u,first:c+i+1});if(null==h)return;let m=0===i?d.YY.fromFile(u,e,r):new d.YY(await this.getBestRevisionUri(e,u,h.values[c+i-1]?.oid??g.Ii));if(null==m||m.sha===g.Ii)return;return{current:m,previous:new d.YY(await this.getBestRevisionUri(e,u,h.values[c+i]?.oid??g.Ii))}}catch(e){throw F.Yd.error(e,o),e}}async getPreviousComparisonUrisForLine(e,t,r,i,o=0){if(i===g.Ii)return;let n=(0,E.UH)();try{let n;let a=await this.ensureRepositoryContext(e);if(null==a)return;let{remotehub:s}=a,l=this.getRelativePath(t,s.getProviderRootUri(t)),u=d.YY.fromFile(l,e,i),c=r,h=r,m=r;for(let t=0;t<Math.max(0,o)+2;t++){let t=await this.getBlameForLine(n??u,m,void 0,{forceSingleLine:!0});if(null==t)break;i=t.commit.sha,l=t.commit.file?.path??t.commit.file?.originalPath??l,m=t.line.originalLine-1;let r=d.YY.fromFile(l,e,i);null==n||(u=n,c=h),n=r,h=m}if(null==u)return;return{current:u,previous:n,line:(c??r)+1}}catch(e){throw F.Yd.error(e,n),e}}async getIncomingActivity(e,t){}async getRemotes(e,t){if(null==e)return[];let r=(0,G.v)(S.D.get("remotes",null)),[,i,o]=n.Uri.parse(e,!0).path.split("/",3),a=`https://github.com/${i}/${o}.git`,s="github.com",l=`${i}/${o}`;return[new v.ss(this.container,e,"origin","https",s,l,(0,G.B)(this.container,r)(a,s,l),[{type:"fetch",url:a},{type:"push",url:a}])]}async getRevisionContent(e,t,r){let i=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t);return n.workspace.fs.readFile(i)}async getStash(e){}async getStatusForFile(e,t){}async getStatusForFiles(e,t){}async getStatusForRepo(e){if(null==e)return;let t=await this.ensureRepositoryContext(e);if(null==t)return;let r=await t.metadata.getRevision();if(null!=r)return new C.Hk(e,r.name,r.revision,[],{ahead:0,behind:0},r.type===_.Branch||r.type===_.RemoteBranch?`origin/${r.name}`:void 0)}async getTags(e,t){if(null==e)return V;let r=(0,E.UH)(),i=t?.cursor?void 0:this._tagsCache.get(e);null==i&&(i=(async function(){try{let r,i;let{metadata:o,github:n,session:a}=await this.ensureRepositoryContext(e),s=[],l=t?.cursor,u=null==l;for(;;){let t=await n.getTags(a.accessToken,o.repo.owner,o.repo.name,{cursor:l});for(let o of t.values)r=o.target.authoredDate??o.target.target?.authoredDate??o.target.tagger?.date,i=o.target.committedDate??o.target.target?.committedDate??o.target.tagger?.date,s.push(new $.gE(e,o.name,o.target.target?.oid??o.target.oid,o.target.message??o.target.target?.message??"",null!=r?new Date(r):void 0,null!=i?new Date(i):void 0));if(!t.paging?.more||!u)return{...t,values:s};l=t.paging.cursor}}catch(t){return F.Yd.error(t,r),this._tagsCache.delete(e),V}}).call(this),t?.cursor==null&&this._tagsCache.set(e,i));let o=await i;return t?.filter!=null&&(o={...o,values:o.values.filter(t.filter)}),t?.sort!=null&&(0,$.Pj)(o.values,"boolean"==typeof t.sort?void 0:t.sort),o}async getTreeEntryForRevision(e,t,r){if(null==e||!t)return;if("HEAD"===r){let t=await this.ensureRepositoryContext(e);if(null==t)return;let i=await t.metadata.getRevision();r=i?.revision}let i=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t),o=await n.workspace.fs.stat(i);if(null!=o)return{ref:r,oid:"",path:this.getRelativePath(i,e),size:o.size,type:(o.type&n.FileType.Directory)===n.FileType.Directory?"tree":"blob"}}async getTreeForRevision(e,t){if(null==e)return[];if("HEAD"===t){let r=await this.ensureRepositoryContext(e);if(null==r)return[];let i=await r.metadata.getRevision();t=i?.revision}let r=t?this.createProviderUri(e,t):this.createVirtualUri(e,t),i=await n.workspace.fs.readDirectory(r);if(null==i)return[];let o=[];for(let[e,a]of i){let i=this.getAbsoluteUri(e,r);o.push({ref:t,oid:"",path:this.getRelativePath(e,i),size:0,type:(a&n.FileType.Directory)===n.FileType.Directory?"tree":"blob"})}return[]}async hasBranchOrTag(e,t){let[{values:r},{values:i}]=await Promise.all([this.getBranches(e,{filter:t?.filter?.branches,sort:!1}),this.getTags(e,{filter:t?.filter?.tags,sort:!1})]);return 0!==r.length||0!==i.length}async hasCommitBeenPushed(e,t){return!0}isTrackable(e){return this.supportedSchemes.has(e.scheme)}async isTracked(e){if(!this.isTrackable(e)||null==this.container.git.getRepository(e))return!1;let t=e.with({scheme:s.sN.GitHub});return null!=await n.workspace.fs.stat(t)}async getDiffTool(e){}async openDiffTool(e,t,r){}async openDirectoryCompare(e,t,r,i){}async resolveReference(e,t,r,i){let o;if(!t||t===g.Ii||null==r&&(0,w.D3)(t)||null!=r&&(0,w.l3)(t))return t;if(null!=r)o=this.getRelativePath(r,e);else if(!(0,w.yo)(t)||t.endsWith("^3"))return t;let n=await this.ensureRepositoryContext(e);if(null==n)return t;let{metadata:a,github:s,session:l}=n,u=await s.resolveReference(l.accessToken,a.repo.owner,a.repo.name,t,o);return null!=u?u:o?g.Ii:t}async richSearchCommits(e,t,r){if(null==e)return;let i=(0,E.UH)(),o=(0,P.pD)(t),n=o.get("commit:");if(n?.size){let t=await this.getCommit(e,(0,q.Ps)(n));if(null==t)return;return{repoPath:e,commits:new Map([[t.sha,t]]),sha:t.sha,range:void 0,count:1,limit:1,hasMore:!1}}let a=await this.getQueryArgsFromSearchQuery(t,o,e);if(0===a.length)return;let s=this.getPagingLimit(r?.limit);try{let{metadata:i,github:o,session:n}=await this.ensureRepositoryContext(e),l=`repo:${i.repo.owner}/${i.repo.name}+${a.join("+").trim()}`,u=await o.searchCommits(n.accessToken,l,{cursor:r?.cursor,limit:s,sort:r?.ordering==="date"?"committer-date":r?.ordering==="author-date"?"author-date":void 0});if(null==u)return;let c=new Map,h=n.account.label;for(let t of u.values){let r=null!=h&&t.author.name===h?"You":t.author.name,i=null!=h&&t.committer.name===h?"You":t.committer.name,o=c.get(t.oid);null==o&&(o=new p.aM(this.container,e,t.oid,new p._j(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new p._j(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,t.files?.map(t=>new y.K8(e,t.filename??"",B.fromCommitFileStatus(t.status)??y.NV.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),c.set(t.oid,o))}let d={repoPath:e,commits:c,sha:void 0,range:void 0,count:c.size,limit:s,hasMore:u.pageInfo?.hasNextPage??!1,endingCursor:u.pageInfo?.endCursor??void 0,query:t=>this.getLog(e,{...r,limit:t})};if(d.hasMore){let e=function(i){return async o=>{o=this.getPagingLimit(o);let n=await this.richSearchCommits(i.repoPath,t,{...r,limit:o,cursor:i.endingCursor});if(null==n)return{...i,hasMore:!1,more:void 0};let a=new Map([...i.commits,...n.commits]),s={repoPath:i.repoPath,commits:a,sha:i.sha,range:void 0,count:a.size,limit:(i.limit??0)+o,hasMore:n.hasMore,endingCursor:n.endingCursor,query:i.query};return s.hasMore&&(s.more=e.call(this,s)),s}};d.more=e.call(this,d)}return d}catch(e){F.Yd.error(e,i)}}async searchCommits(e,t,r){t={matchAll:!1,matchCase:!1,matchRegex:!0,...t};let i=(0,P.FL)(t);try{let n=new Map,a=(0,P.pD)(t),s=a.get("commit:");if(null!=s){let o=await Promise.allSettled([...(0,q.UI)(s,t=>this.getCommit(e,t.replace(L,"")))]),a=0;for(let e of o){let t=(0,A.Sb)(e);null!=t&&n.set(t.sha,{i:a++,date:Number(r?.ordering==="author-date"?t.author.date:t.committer.date)})}return{repoPath:e,query:t,comparisonKey:i,results:n}}let l=await this.getQueryArgsFromSearchQuery(t,a,e);if(0===l.length)return{repoPath:e,query:t,comparisonKey:i,results:n};let{metadata:u,github:c,session:h}=await this.ensureRepositoryContext(e),d=`repo:${u.repo.owner}/${u.repo.name}+${l.join("+").trim()}`;async function o(a,s){if(r?.cancellation?.isCancellationRequested)return{repoPath:e,query:t,comparisonKey:i,results:n};a=this.getPagingLimit(a??S.D.get("advanced.maxSearchItems"));let l=await c.searchCommitShas(h.accessToken,d,{cursor:s,limit:a,sort:r?.ordering==="date"?"committer-date":r?.ordering==="author-date"?"author-date":void 0});if(null==l||r?.cancellation?.isCancellationRequested)return{repoPath:e,query:t,comparisonKey:i,results:n};for(let e of l.values)n.set(e.sha,{i:n.size,date:Number(r?.ordering==="author-date"?e.authorDate:e.committerDate)});return s=l.pageInfo?.endCursor??void 0,{repoPath:e,query:t,comparisonKey:i,results:n,paging:l.pageInfo?.hasNextPage?{limit:a,hasMore:!0}:void 0,more:async e=>o.call(this,e,s)}}return o.call(this,r?.limit)}catch(e){if(e instanceof h.l0)throw e;throw new h.l0(e)}}async validateBranchOrTagName(e,t){return Q.test(e)}async validateReference(e,t){return!0}async stageFile(e,t){}async stageDirectory(e,t){}async unstageFile(e,t){}async unstageDirectory(e,t){}async ensureRepositoryContext(e,t){let r,i,o=n.Uri.parse(e,!0);if(!/^github\+?/.test(o.authority))throw new u.kX(e,u.sh.NotAGitHubRepository);if(!t){let t=this.container.git.getRepository(o);if(null==t)throw new u.kX(e,u.sh.NotAGitHubRepository);o=t.uri}let a=this._remotehub;if(null==a)try{a=await this.ensureRemoteHubApi()}catch(t){throw u.R5,new u.kX(e,u.sh.RemoteHubApiNotFound,t)}let s=await a?.getMetadata(o);if(s?.provider.id!=="github")throw new u.kX(e,u.sh.NotAGitHubRepository);try{[r,i]=await Promise.all([this.ensureGitHub(),this.ensureSession()])}catch(t){if(t instanceof u._7)throw new u.kX(e,t.reason===u.Jx.UserDidNotConsent?u.sh.GitHubAuthenticationDenied:u.sh.GitHubAuthenticationNotFound,t);throw new u.kX(e)}if(null==r)throw new u.kX(e);return{github:r,metadata:s,remotehub:a,session:i}}_github;async ensureGitHub(){if(null==this._github){let e=await this.container.github;null!=e&&this._disposables.push(e.onDidReauthenticate(()=>void this.ensureSession(!0))),this._github=e}return this._github}_remotehub;_remotehubPromise;async ensureRemoteHubApi(e){if(null==this._remotehubPromise&&(this._remotehubPromise=T(),this._remotehubPromise.then(e=>this._remotehub=e,()=>this._remotehub=void 0)),!e)return this._remotehubPromise;try{return await this._remotehubPromise}catch{return}}_sessionPromise;async ensureSession(e=!1,t=!1){if(e||null==this._sessionPromise){async function r(){let i=this.container.storage.get(`provider:authentication:skip:${this.descriptor.id}`,!1);try{if(e)return i=!1,this.container.storage.delete(`provider:authentication:skip:${this.descriptor.id}`),await n.authentication.getSession("github",z,{forceNewSession:!0});if(!i&&!t)return await n.authentication.getSession("github",z,{createIfNone:!0});let r=await n.authentication.getSession("github",z,{createIfNone:!1,silent:t});if(null!=r)return r;throw Error("User did not consent")}catch(o){if(o instanceof Error&&o.message.includes("User did not consent")){if(!t&&(await this.container.storage.store(`provider:authentication:skip:${this.descriptor.id}`,!0),!i))return e||queueMicrotask(async()=>{let e="Re-enable";await n.window.showInformationMessage("GitLens has been disabled. Authentication is required for GitLens to work with remote GitHub repositories.",e)===e&&this.ensureSession(!0)}),e=!1,r.call(this);throw new u._7("github",u.Jx.UserDidNotConsent)}throw F.Yd.error(o),new u._7("github",void 0,o)}}this._sessionPromise=r.call(this)}return this._sessionPromise}createVirtualUri(e,t,r){var i;let o;if("string"==typeof t)t&&(o=(0,w.D3)(t)?{v:1,ref:{id:t,type:2}}:{v:1,ref:{id:t,type:4}});else switch(t?.refType){case"revision":case"stash":o={v:1,ref:{id:t.ref,type:2}};break;case"branch":case"tag":o={v:1,ref:{id:t.name,type:4}}}if("string"==typeof e&&(e=n.Uri.parse(e,!0)),r){let t=e.path;t.endsWith("/")&&(t=t.slice(0,-1)),r=this.getRelativePath(r,e),r=`${t}/${r.startsWith("/")?r.slice(0,-1):r}`}return e.with({scheme:s.sN.Virtual,authority:(i=o,`github${null!=i?`+${(0,a.e)(JSON.stringify(i))}`:""}`),path:r??e.path})}createProviderUri(e,t,r){let i=this.createVirtualUri(e,t,r);return null==this._remotehub?i.scheme!==s.sN.Virtual?i:i.with({scheme:s.sN.GitHub}):this._remotehub.getProviderUri(i)}getPagingLimit(e){return 0===(e=Math.min(100,e??S.D.get("advanced.maxListItems")??100))&&(e=100),e}async resolveReferenceCore(e,t,r){if(null==r||"HEAD"===r)return(await t.getRevision()).revision;if((0,w.D3)(r))return r;if((0,w.yk)(r))return;let[i,o]=await Promise.allSettled([this.getBranches(e,{filter:e=>e.name===r}),this.getTags(e,{filter:e=>e.name===r})]);return r=A.Sb(i)?.values[0]?.sha??A.Sb(o)?.values[0]?.sha}async getQueryArgsFromSearchQuery(e,t,r){let i=[];for(let[o,n]of t.entries())switch(o){case"message:":i.push(...(0,q.UI)(n,e=>e.replace(/ /g,"+")));break;case"author:":{let t;for(let o of(n.has("@me")&&(t=await this.getCurrentUser(r)),n))if(o&&(o=o.replace(L,e.matchRegex?"\\b":""))){if("@me"===o){if(t?.username==null)continue;o=`@${t.username}`}(o=o.replace(/ /g,"+")).startsWith("@")?i.push(`author:${o.slice(1)}`):o.includes("@")?i.push(`author-email:${o}`):i.push(`author-name:${o}`)}}}return i}};N([(0,D.cM)()],GitHubGitProvider.prototype,"getBestRevisionUri",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getWorkingUri",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"addRemote",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"pruneRemote",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"removeRemote",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"applyChangesToWorkingFile",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"branchContainsCommit",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"checkout",1),N([(0,D.cM)({singleLine:!0})],GitHubGitProvider.prototype,"resetCache",1),N([(0,D.cM)({singleLine:!0})],GitHubGitProvider.prototype,"resetCaches",1),N([(0,D.cM)({args:{1:e=>e.length}})],GitHubGitProvider.prototype,"excludeIgnoredUris",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"fetch",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"pull",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"push",1),N([(0,U.H)(),(0,D.fF)()],GitHubGitProvider.prototype,"findRepositoryUri",1),N([(0,D.cM)({args:{1:e=>e.join(",")}})],GitHubGitProvider.prototype,"getAheadBehindCommitCount",1),N([(0,U.H)((e,t)=>`${e.toString()}|${t?.isDirty}`),(0,D.cM)({args:{1:e=>e?.isDirty}})],GitHubGitProvider.prototype,"getBlame",1),N([(0,D.cM)({args:{1:"<contents>"}})],GitHubGitProvider.prototype,"getBlameContents",1),N([(0,U.H)((e,t,r,i)=>`${e.toString()}|${t}|${r?.isDirty}|${i?.forceSingleLine}`),(0,D.cM)({args:{2:e=>e?.isDirty}})],GitHubGitProvider.prototype,"getBlameForLine",1),N([(0,D.cM)({args:{2:"<contents>"}})],GitHubGitProvider.prototype,"getBlameForLineContents",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getBlameForRange",1),N([(0,D.cM)({args:{2:"<contents>"}})],GitHubGitProvider.prototype,"getBlameForRangeContents",1),N([(0,D.cM)({args:{0:"<blame>"}})],GitHubGitProvider.prototype,"getBlameRange",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getBranch",1),N([(0,D.cM)({args:{1:!1}})],GitHubGitProvider.prototype,"getBranches",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getChangedFilesCount",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getCommit",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getCommitBranches",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getCommitCount",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getCommitForFile",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getCommitsForGraph",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getCommitTags",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getContributors",1),N([(0,U.H)(),(0,D.cM)()],GitHubGitProvider.prototype,"getCurrentUser",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getDefaultBranchName",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getDiffForFile",1),N([(0,D.cM)({args:{1:e=>"<contents>"}})],GitHubGitProvider.prototype,"getDiffForFileContents",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getDiffForLine",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getDiffStatus",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getFileStatusForCommit",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getLog",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getLogRefsOnly",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getLogForFile",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getMergeBase",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getMergeStatus",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getRebaseStatus",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getNextComparisonUris",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getOldestUnpushedRefForFile",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getPreviousComparisonUris",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getPreviousComparisonUrisForLine",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getIncomingActivity",1),N([(0,D.cM)({args:{1:!1}})],GitHubGitProvider.prototype,"getRemotes",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getRevisionContent",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getStash",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getStatusForFile",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getStatusForFiles",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getStatusForRepo",1),N([(0,D.cM)({args:{1:!1}})],GitHubGitProvider.prototype,"getTags",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getTreeEntryForRevision",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getTreeForRevision",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"hasBranchOrTag",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"hasCommitBeenPushed",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"getDiffTool",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"openDiffTool",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"openDirectoryCompare",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"resolveReference",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"richSearchCommits",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"searchCommits",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"validateBranchOrTagName",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"validateReference",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"stageFile",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"stageDirectory",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"unstageFile",1),N([(0,D.cM)()],GitHubGitProvider.prototype,"unstageDirectory",1),N([(0,U.H)()],GitHubGitProvider.prototype,"ensureRepositoryContext",1),N([(0,U.H)()],GitHubGitProvider.prototype,"ensureGitHub",1)},998:(e,t,r)=>{r.r(t),r.d(t,{fromCommitFileStatus:()=>g,fromGitHubIssueDetailed:()=>p,fromGitHubPullRequest:()=>a,fromGitHubPullRequestDetailed:()=>m,fromGitHubPullRequestMergeableState:()=>h,fromGitHubPullRequestReviewDecision:()=>u,fromGitHubPullRequestState:()=>s,toGitHubPullRequestMergeableState:()=>d,toGitHubPullRequestReviewDecision:()=>c,toGitHubPullRequestState:()=>l});var i=r(7881),o=r(8452),n=r(4092);function a(e,t){return new n.i7(t,{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},String(e.number),e.id,e.title,e.permalink,s(e.state),new Date(e.updatedAt),null==e.closedAt?void 0:new Date(e.closedAt),null==e.mergedAt?void 0:new Date(e.mergedAt))}function s(e){return"MERGED"===e?"merged":"CLOSED"===e?"closed":"opened"}function l(e){return"merged"===e?"MERGED":"closed"===e?"CLOSED":"OPEN"}function u(e){switch(e){case"APPROVED":return n.pD.Approved;case"CHANGES_REQUESTED":return n.pD.ChangesRequested;case"REVIEW_REQUIRED":return n.pD.ReviewRequired}}function c(e){switch(e){case n.pD.Approved:return"APPROVED";case n.pD.ChangesRequested:return"CHANGES_REQUESTED";case n.pD.ReviewRequired:return"REVIEW_REQUIRED"}}function h(e){switch(e){case"MERGEABLE":return n.Cz.Mergeable;case"CONFLICTING":return n.Cz.Conflicting;case"UNKNOWN":return n.Cz.Unknown}}function d(e){switch(e){case n.Cz.Mergeable:return"MERGEABLE";case n.Cz.Conflicting:return"CONFLICTING";case n.Cz.Unknown:return"UNKNOWN"}}function m(e,t){return new n.i7(t,{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},String(e.number),e.id,e.title,e.permalink,s(e.state),new Date(e.updatedAt),null==e.closedAt?void 0:new Date(e.closedAt),null==e.mergedAt?void 0:new Date(e.mergedAt),h(e.mergeable),{head:{exists:null!=e.headRepository,owner:e.headRepository?.owner.login,repo:e.baseRepository?.name,sha:e.headRefOid,branch:e.headRefName,url:e.headRepository?.url},base:{exists:null!=e.baseRepository,owner:e.baseRepository?.owner.login,repo:e.baseRepository?.name,sha:e.baseRefOid,branch:e.baseRefName,url:e.baseRepository?.url},isCrossRepository:e.isCrossRepository},e.isDraft,e.additions,e.deletions,e.totalCommentsCount,u(e.reviewDecision),e.reviewRequests.nodes.map(e=>({isCodeOwner:e.asCodeOwner,reviewer:{name:e.requestedReviewer.login,avatarUrl:e.requestedReviewer.avatarUrl,url:e.requestedReviewer.url}})),e.assignees.nodes.map(e=>({name:e.login,avatarUrl:e.avatarUrl,url:e.url})))}function p(e,t){return new o.$9({id:t.id,name:t.name,domain:t.domain,icon:t.icon},String(e.number),e.id,e.title,e.url,new Date(e.createdAt),e.closed,s(e.state),new Date(e.updatedAt),{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},{owner:e.repository.owner.login,repo:e.repository.name},e.assignees.nodes.map(e=>({name:e.login,avatarUrl:e.avatarUrl,url:e.url})),null==e.closedAt?void 0:new Date(e.closedAt),e.labels?.nodes==null?void 0:e.labels.nodes.map(e=>({color:e.color,name:e.name})),e.comments?.totalCount,e.reactions?.totalCount)}function g(e){switch(e){case"added":return i.NV.Added;case"changed":case"modified":return i.NV.Modified;case"removed":return i.NV.Deleted;case"renamed":return i.NV.Renamed;case"copied":return i.NV.Copied}}},778:(e,t,r)=>{var i=r(2479);function o(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function n(e){var t=function(){if(t.called)throw Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}e.exports=i(o),e.exports.strict=i(n),o.proto=o(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return o(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return n(this)},configurable:!0})})},2479:e=>{e.exports=function e(t,r){if(t&&r)return e(t)(r);if("function"!=typeof t)throw TypeError("need wrapper function");return Object.keys(t).forEach(function(e){i[e]=t[e]}),i;function i(){for(var e=Array(arguments.length),r=0;r<e.length;r++)e[r]=arguments[r];var i=t.apply(this,e),o=e[e.length-1];return"function"==typeof i&&i!==o&&Object.keys(o).forEach(function(e){i[e]=o[e]}),i}}}};