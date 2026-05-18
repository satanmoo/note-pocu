---
tags:
  - assignment1
  - COMP2500
---
## 테스트 설명

### A. 최소 요건 검사  

빌드봇이 채점을 할 수 있는 최소 요건을 충족하는지 확인합니다. 이 테스트 중 하나라도 실패할 경우 빌드봇은 채점을 바로 0점을 주며,다른 테스트들을 진행하지 않을 수  있습니다.  
  

A00_RegistryValidation
Registry 클래스에 등록된 정보들이 올바른지 확인합니다. (예: 클래스가 존재하는지 여부 등) 

A01_NoOrphanClass 
제출된 클래스들이 모두 사용되는지 확인합니다. 

A02 NoRestrictions Violated
본 과제에서 허용하지 않는 기능들을 사용하는지 확인합니다.

### B. 빈 블로그 테스트

빈 블로그로 진행하는 테스트입니다. 블로그를 생성할 수 있는지 등을 테스트합니다.

B00_BlogCreatorSensical
registerBlogCreator()에 등록된 생성자의 설계가 적절한지 확인합니다. 

B01_BlogDataHiding
블로그의 데이터 숨기기(data hiding)가 잘 되어 있는지 확인합니다.

B02_CreateBlog
블로그를 만들 수 있는지 확인합니다.

 B03_CreatedBlogUnique
여러 블로그를 만들었을 때 각 블로그가 독자적인지 확인합니다.

B04_CreatedBlogValid
블로그가 생성 시부터 올바른 상태인지 확인합니다.

### C. 블로그 글 관련 테스트

블로그 글의 기능과 설계 등을 테스트합니다.

C00_PostAdderPatternSensical registerPostAdder()에 등록된 메서드의 설계 및 사용법이 
적절한지 확인합니다.

C01_PostCreatorSensical
새로운 블로그 글을 추가하는 설계가 적절한지 확인합니다.

C02_CreatePost
새로운 블로그 글을 작성할 수 있는지 확인합니다.

C03_PostDataHiding
블로그 글의 데이터 숨기기(data hiding)가 잘 되어 있는지 확인합니다.

C04_CreatedPostUnique
여러 블로그 글을 작성했을 때 각각이 독자적인지 확인합니다.

C05_CreatedPostValid
새로 작성된 블로그 글의 상태가 유효한지 확인합니다. 

C06_CanReadPostData  
블로그 글을 구성하는 중요 데이터를 읽어올 수 있는지 확인합니다.

이 테스트는 보통 생성자 인자로 들어온 데이터를 그 개체 안에서 찾을 수 없을 경우 실패함

C07_PostAdder
블로그에 글을 추가할 수 있는지 확인합니다.

C08_PostListGetterSensical
블로그 글 목록을 가져오는 방법을 적절히 설계했는지 확인합니다.

C09_PostListGetterOnePost
블로그에 글을 하나 추가한 뒤 가져온 글 목록에서 그 블로그 글이 목록 안에 있는지 확인합니다.

C10_ManyPosts
블로그 글을 여러 개 추가해도 올바르게 동작하는지 확인합니다.

C11_UpdatePost
블로그 글이 제대로 변경되는지 확인합니다.

C12_UpdateOthersPost
작성자가 아닌 다른 사람이 블로그 글을 변경할 수 없는지 확인합니다.

### D. 댓글 및 하위 댓글 관련 테스트

블로그 글에 다는 댓글이나 댓글에 다는 하위 댓글의 기능과 설계를 테스트합니다.

D00_CommentAdderPatternSensical
registerCommentAdder()에 등록된 메서드의 설계 및 사용법이 적절한지 확인합니다.

D01_CreateComment
새로운 댓글을 달 수 있는지 확인합니다.

D02_CreatedCommentValid
새로 달린 댓글의 상태가 유효한지 확인합니다.

D03_AddComment
블로그 글에 댓글을 추가할 수 있는지 확인합니다.

D04_CanGetComments
블로그 글에 추가된 댓글들을 가져올 수 있는지 확인합니다.

 D05_ManyComments
댓글을 여러 개 달아도 올바르게 동작하는지 확인합니다.

D06_UpdateComment
내가 작성한 댓글을 변경할 때 제대로 동작하는지 확인합니다.

D07_UpdateOthersComment
남이 작성한 댓글을 변경할 때 제대로 동작하는지 확인합니다.

D08_UpDownVote
추천/비추천 기능이 제대로 동작하는지 확인합니다.

추천/비추천 정보를 각각 어떻게 유지하고 변경할 것인지, 이미 추천/비추천을 하거나 하지 않은 상태에서 유저가 어떤 액션을 취했을 때 어떻게 대응할 것인지에 대한 고민도 포함되어야 합니다.

D09_DuplicateVotes
같은 댓글을 여러 번 추천 혹은 비추천할 때 제대로 동작하는지 확인합니다.

D10_SubcommentAdderPatternSensical
registerSubcommentAdder()에 등록된 메서드의 설계 및 사용법이 적절한지 확인합니다.

D11_AddSubcomment
댓글에 하위 댓글을 추가할 수 있는지 확인합니다.

D12_CanGetSubcomments
댓글에 추가된 하위 댓글들을 가져올 수 있는지 확인합니다.

D13_ManySubcomments
하위 댓글을 여러 개 달아도 올바르게 동작하는지 확인합니다

D14_UpdateSubcomment
하위 댓글을 변경할 때 제대로 동작하는지 확인합니다.

D15_DeepComments
댓글, 댓글에 하위 댓글, 하위 댓글에 다시 하위 댓글을 다는 등. 여러 단계에 걸쳐 댓글을 달 때 제대로 동작하는지 확인합니다.

### E. 태그 및 리액션 관련 테스트

태그 및 리액션의 기능 및 설계를 테스트합니다.

E00_TagAdderSensical
registerPostTagAdder()에 등록된 메서드의 설계 및 사용법이 적절한지 확인합니다.

E01_AddTag
블로그 글에 태그를 달 때 제대로 동작하는지 확인합니다.

- 태그의 구현 방식에 따라 통과되지 않을 수 있습니다.
    
E02_DuplicateTags
블로그 글에 같은 태그를 여러 번 달 때 제대로 동작하는지 확인합니다.

E03_CanReadTags
블로그 글에 단 태그를 읽을 수 있는지 확인합니다.

E04_ReactionTypeSensical
리액션에 사용한 자료형이 적절한지 확인합니다.

E05_ReactionAdderRemoverSensible
registerReactionAdder()와 registerReactionRemover()에 등록된 메서드의 설계 및 사용법이 적절한지 확인합니다.

E06_AddRemoveReaction
블로그 글에 리액션을 추가하거나 제거할 때 제대로 동작하는지 확인합니다.

- 다른 Add류 테스트들과 마찬가지로 Reaction에 대한 설계에 대한 평가가 포함됩니다. 더 간결한 구현 방법이 없는지에 대한 고민이 도움이 됩니다.
    
E07_CanReadReactions
블로그 글에 추가한 리액션 상태를 읽어올 수 있는지 확인합니다.

E08_ReactionGetterSensical
리액션을 반환하는 메서드(getter)의 설계 및 사용법이 적절한지 확인합니다

### F. 글 목록 정렬 관련 테스트

F01_SortingMethodTypeSensical
정렬 방법을 지정할 때 사용한 자료형이 적절한지 확인합니다.

F02_PostOrderSetterSensical
registerPostOrderSetter()에 등록된 메서드의 설계 및 사용법이 적절한지 확인합니다.

F03_SortMethods
정렬 방법들이 모두 제대로 동작하는지 확인합니다.

### G. 필터링 관련 테스트

작성자 필터와 태그 필터에 기능 및 설계를 테스트합니다.

G00_AuthorFilterSetterSensical
registerAuthorFilterSetter()에 등록된 메서드의 설계 및 사용법이 적절한지 확인합니다.

G01_SetAuthorFilter
작성자 필터가 제대로 동작하는지 확인합니다.

- 이 때 작성자를 구현한 방법에 따라 어떤 멤버 변수를 통해 작성자의 정보를 저장하고 활용할지에 대한 고민도 필요합니다.
    
G02_UnsetAuthorFilterSetterSensical
작성자 필터를 제거하려 하면 제대로 동작하는지 확인합니다.

G03_TagFilterSetterSensical
registerTagFilterSetter()에 등록된 메서드의 설계 및 사용법이 적절한지 확인합니다.

G04_SetTagFilter
태그 필터가 제대로 동작하는지 확인합니다.

G05_SetMultiTagFilter
여러 태그를 필터에 사용해도 제대로 동작하는지 확인합니다.

G06_UnsetTagFilter
태그 필터를 제거하려고 하면 제대로 동작하는지 확인합니다.

G07_ComboFilter
작성자 필터와 태그 필터를 같이 사용할 때 제대로 동작하는지 확인합니다.

### H. 블로그 시스템 기능 관련 테스트

블로그 시스템 기능들을 전반적으로 테스트 합니다.

H00_BlogSystemTest1
블로그의 기능을 모두 테스트하는 테스트 케이스 1

H01_BlogSystemTest2
블로그의 기능을 모두 테스트하는 테스트 케이스 2

### I. 기타 설계 관련 테스트

I00_PostUpdaterEncapsulationSensical
PostUpdater의 캡슐화가 적절한지 확인합니다.

I01_PostListGetterEncapsulationSensical
PostListGetter의 캡슐화가 적절한지 확인합니다.

I02_PostAdderEncapsulationSensical
PostAdder의 캡슐화가 적절한지 확인합니다.

I03_FilterSetterEncapsulationSensical
FilterSetter들의 캡슐화가 적절한지 확인합니다.

I04_PostOrderSetterEncapsulationSensical
PostOrderSetter의 캡슐화가 적절한지 확인합니다.

I05_UniformCommentRep
블로그 시스템에 걸쳐 댓글의 자료형을 통일적으로 사용했는지 확인합니다.

I06_UniformSubcommentRep
블로그 시스템에 걸쳐 하위 댓글의 자료형을 통일적으로 사용했는지 확인합니다.

I07_UniformPostRep
블로그 시스템에 걸쳐 블로그 글의 자료형을 통일적으로 사용했는지 확인합니다.

I08_UserAuthorDesignSensical
작성자와 방문자의 설계가 적절한지 확인합니다.

I09_UniformUserRep
블로그 시스템에 걸쳐 사용자(user) 자료형을 통일적으로 사용했는지 확인합니다.

I10_CommentVoterEncapsulationSensical
CommentUpvoter와 CommentDownVoter의 캡슐화가 적절한지 확인합니다.

I11_CommentUpdaterEncapsulationSensical
CommentUpdater의 캡슐화가 적절한지 확인합니다.

I12_UnnecessaryNullRepresentation
OrNull 접미사가 적절하게 사용되는지 확인합니다.