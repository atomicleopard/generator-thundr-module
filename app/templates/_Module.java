package <%= pkg %>;

import com.threewks.thundr.injection.InjectionContext;
import com.threewks.thundr.injection.UpdatableInjectionContext;
import com.threewks.thundr.module.DependencyRegistry;

/**
 * Module class for <%= name %>. Add it to the {@link DependencyRegistry} in your ApplicationModule
 * like this:
 * <pre><code>
 * @Override
	public void requires(DependencyRegistry dependencyRegistry) {
		dependencyRegistry.addDependency(<%= javaModule %>Module.class);
	}
	
 * </code></pre>
 * 
 * This module provides the following features:
 * <ul>
 * 	<li>Awesome feature 1</li>
 * 	<li>Awesome feature 2</li>
 * </ul>
 * 
 */
public class <%= javaModule %>Module implements com.threewks.thundr.injection.Module {
	@Override
	public void requires(DependencyRegistry dependencyRegistry) {
	}

	@Override
	public void initialise(UpdatableInjectionContext injectionContext) {
	}

	@Override
	public void configure(UpdatableInjectionContext injectionContext) {
	}

	@Override
	public void start(UpdatableInjectionContext injectionContext) {
	}

	@Override
	public void stop(InjectionContext injectionContext) {
	}
}
