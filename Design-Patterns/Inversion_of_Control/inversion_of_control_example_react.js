// It might feel redundant to pass down the user and avatarSize props through many levels if in the end only the Avatar component really needs it.
//  It’s also annoying that whenever the Avatar component needs more props from the top, you have to add them at all the intermediate levels too.
// 
// One way to solve this issue without context is to pass down the Avatar component itself so that the intermediate components don’t need to know
//  about the user or avatarSize props:


function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// Now, we have:
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout userLink={...} />
// ... which renders ...
<NavigationBar userLink={...} />
// ... which renders ...
{props.userLink}

// With this change, only the top-most Page component needs to know about the Link and Avatar components’ use of user and avatarSize.
// 
// This inversion of control can make your code cleaner in many cases by reducing the amount of props you need to pass through your application 
// and giving more control to the root components. Such inversion, however, isn’t the right choice in every case; moving more complexity higher 
// in the tree makes those higher-level components more complicated and forces the lower-level components to be more flexible than you may want.

