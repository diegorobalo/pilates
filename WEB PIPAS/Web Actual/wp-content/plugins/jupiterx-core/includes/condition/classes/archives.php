<?php

/**
 * Check archive conditions if match current WordPress page.
 *
 * @return boolean
 * @since 2.0.0
 * @SuppressWarnings(PHPMD.CyclomaticComplexity)
 * @SuppressWarnings(PHPMD.NPathComplexity)
 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
 */
class Jupiterx_Archives_Condition {

	public function sub_condition( $condition, $query, $post ) {
		if ( 'all' === $condition[1] && is_archive() ) {
			return true;
		}

		// All author archives or certain author archive.
		if ( 'by_author' === $condition[1] ) {
			if ( 'all' === $condition[2][0] && is_author() ) {
				return true;
			}

			if ( is_author( $condition[2][0] ) ) {
				return true;
			}
		}

		// Date archive.
		if ( 'date' === $condition[1] && is_date() ) {
			return true;
		}

		// Search archive.
		if ( 'search' === $condition[1] && is_search() ) {
			return true;
		}

		// Post tag all.
		if ( 'post_tag' === $condition[1] && 'all' === $condition[2][0] && is_tag() ) {
			return true;
		}

		// Post tag single.
		if ( 'post_tag' === $condition[1] && 'all' !== $condition[2][0] && is_tag( $condition[2][0] ) ) {
			return true;
		}

		// Post category all.
		if ( 'post_category' === $condition[1] && 'all' === $condition[2][0] && is_category() ) {
			return true;
		}

		// Post category single.
		if ( 'post_category' === $condition[1] && 'all' !== $condition[2][0] && is_category( $condition[2][0] ) ) {
			return true;
		}

		// Prevent above to keep checking if not necessary.
		if ( ! strpos( $condition[1], '@' ) ) {
			return false;
		}

		/**
		 * IF none of above, condition must be about post type archive.
		 * There are 3 scenario for each post type:
		 * 1. Archive page selected
		 * 2. All term taxonomies of the post type is selected.
		 * 3. Certain term of a taxonomy is selected.
		*/
		$type      = explode( '@', $condition[1], 2 );
		$post_type = $type[0];
		$taxonomy  = $type[1];
		$term      = $condition[2][0];

		//1. archive of a post type selected.
		if ( is_post_type_archive( $post_type ) ) {
			return true;
		}

		//2. Certain taxonomy of post type selected and all terms of taxonomy selected.
		if ( is_tax( $taxonomy ) && 'all' === $condition[2][0] ) {
			return true;
		}

		//3. Certain taxonomy and certain term archive selected.
		if ( is_tax( $taxonomy, $term ) ) {
			return true;
		}

		return false;
	}
}
